export function getGqlDomain() {
    const testServerNumber = document.location.host.match( /^(ts|b2b)(\d+)/ );
    const prodServer       = document.location.host.match( /^(www|b2b).reg.(ru|com|ua)/ );
    const zone             = document.location.host.match( /\.(\w+)$/ )[1];

    return testServerNumber
        ? `gql-acc${ testServerNumber[2] }.ts.dev.reg.${ zone }`
        : prodServer
            ? `gql-acc.svc.reg.${ zone }`
            : `gql-acc.local.dev.reg.${ zone }`;
}

export function getApolloServerUri() {
    return `https://${ getGqlDomain() }/v1`;
}

export function getApolloSubscriptionsUri() {
    return `wss://${ getGqlDomain() }/graphql`;
}

export function getCsrfRefreshUri() {
    return `https://${ getGqlDomain() }/refresh-csrf-token`;
}
