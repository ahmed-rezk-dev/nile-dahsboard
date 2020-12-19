import { IncomingMessage, ServerResponse } from 'http';
import { useMemo } from 'react';
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { message as antMessage } from 'antd';
import { isBrowser } from 'utils/isBrowser';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export type ResolverContext = {
    req?: IncomingMessage;
    res?: ServerResponse;
};

const link = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) => {
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
            if (isBrowser) {
                antMessage.error(message as string);
            }
        });
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

function createIsomorphLink(context: ResolverContext = {}) {
    if (typeof window === 'undefined') {
        const { SchemaLink } = require('@apollo/client/link/schema');
        const { schema } = require('./schema');
        return new SchemaLink({ schema, context });
    } else {
        const { HttpLink } = require('@apollo/client');
        return new HttpLink({
            uri: '/api/graphql',
            credentials: 'same-origin',
        });
    }
}

function createApolloClient(context?: ResolverContext) {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: link.concat(createIsomorphLink(context)),
        cache: new InMemoryCache(),
    });
}

export function initializeApollo(
    initialState: any = null,
    // Pages with Next.js data fetching methods, like `getStaticProps`, can send
    // a custom context which will be used by `SchemaLink` to server render pages
    context?: ResolverContext
) {
    const _apolloClient = apolloClient ?? createApolloClient(context);

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // get hydrated here
    if (initialState) {
        _apolloClient.cache.restore(initialState);
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient;
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;

    return _apolloClient;
}

export function useApollo(initialState: any) {
    const store = useMemo(() => initializeApollo(initialState), [initialState]);
    return store;
}
