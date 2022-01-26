# Подключение

import accountApolloClient from '@beehive/account-apollo/client';
import userQuery from '@beehive/account-apollo/queries/get-user.gql';

const result = await accountApolloClient.query({
    query: userQuery,
});
