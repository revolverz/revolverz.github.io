import ApolloClient from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { from, split } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';
import { createUploadLink } from 'apollo-upload-client';

import cfg from '../config.babel.js';
import store from '../store/store.babel.js';
import { fetchCSRFTokenIfNeeded, getCsrfToken, HEADER_NAME as CSRF_HEADER_NAME } from './csrf';
import { getApolloSubscriptionsUri, getApolloServerUri } from './host';

import regJwt from './regJwt.js';


// Заменил на createUploadLink, что бы была возможность отправлять файлы
// Переделывает запросы на формдата если прикреплен файл
const uploadLink = new createUploadLink( {
    uri         : getApolloServerUri(),
    credentials : 'include',
} );

const wsLink = new WebSocketLink( {
    uri     : getApolloSubscriptionsUri(),
    options : {
        reconnect : true,
    },
} );

const commonMiddleware = setContext( async ( operation, { headers } ) => {
    try {
        await regJwt.refreshIfNeeded();
        await fetchCSRFTokenIfNeeded( operation );
    }
    catch ( e ) {
        console.error( e );
    }

    return {
        headers : {
            ...headers,
            [ CSRF_HEADER_NAME ] : getCsrfToken(),
        },
    };
} );

const loginAfterware = onError( ( { networkError } ) => {
    if ( networkError && networkError.statusCode === cfg.unauthorizedHttpCode ) {
        store.dispatch('showAuthForm');
    }
} );

const link = split(
    ( { query } ) => {
        const { kind, operation } = getMainDefinition( query );

        return kind === 'OperationDefinition'
            && operation === 'subscription';
    },
    wsLink,
    from( [
        commonMiddleware,
        loginAfterware,
        uploadLink,
    ] )
);

export const apolloClient = new ApolloClient( {
    link,
    cache : new InMemoryCache( {
        dataIdFromObject : object => {
            switch ( object.__typename ) {
                case 'Service': return `Service::${ object.service_id }`;
                default: return null;
            }
        },
    } ),
    connectToDevTools : true,
} );
