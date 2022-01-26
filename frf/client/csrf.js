import axios from 'axios';
import jsCookie from 'js-cookie';
import { getCsrfRefreshUri } from './host';


const noCsrfOperations = [ 'init' ];

export const COOKIE_NAME = 'ACC_CSRF_TOKEN';

export const HEADER_NAME = 'X-ACC-CSRF-TOKEN';

export const getCsrfToken = () => jsCookie.get( COOKIE_NAME );

export const fetchCSRFTokenIfNeeded = ( operation = '' ) => {

    // пропускаем опрерации не требующие токена
    if ( noCsrfOperations.indexOf( operation ) === -1 ) {
        return Promise.resolve();
    }

    // кука токена еще жива
    if ( getCsrfToken() ) {
        return Promise.resolve();
    }

    return axios(
        getCsrfRefreshUri(),
        {
            withCredentials : true,
            method          : 'post',
        }
    );
};

export const getSRSCsrfToken = () => {
    return window._csrf || '';
};

export const regenerateSRSCsrfToken = async function() {
    const GOOD_RESPONSE = 200;

    const response = await axios.get('/user/regenerate_csrf_token');

    if ( response.status !== GOOD_RESPONSE ) {
        throw new Error('CSRF_REGENERATION_ERROR');
    }

    window._csrf = response.data.token || '';
};

export default {
    COOKIE_NAME,
    HEADER_NAME,
    getCsrfToken,
    fetchCSRFTokenIfNeeded,
    getSRSCsrfToken,
    regenerateSRSCsrfToken,
};
