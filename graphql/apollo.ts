import { IncomingMessage, ServerResponse } from 'http';
import { useMemo } from 'react';
import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { message as antMessage } from 'antd';
import { isBrowser } from 'utils/isBrowser';
import { setContext } from '@apollo/client/link/context';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export type ResolverContext = {
    req?: IncomingMessage;
    res?: ServerResponse;
};

let auth = {
    token: undefined,
    userId: undefined,
};

const linkError = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) => {
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
            if (isBrowser) {
                antMessage.error(message as string);
            }
        });
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = createHttpLink({
    uri: 'api/graphql',
    credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const { token } = auth;
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

function createApolloClient(_context?: ResolverContext, _initialState?: any) {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: ApolloLink.from([linkError, authLink, link]),
        cache: new InMemoryCache(),
    });
}

export function initializeApollo(
    initialState: any = null,
    // Pages with Next.js data fetching methods, like `getStaticProps`, can send
    // a custom context which will be used by `SchemaLink` to server render pages
    context?: ResolverContext
) {
    const _apolloClient = apolloClient ?? createApolloClient(context, initialState);

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
    console.log('🛎 initialState: => ', initialState);
    auth = { ...initialState.auth };
    const store = useMemo(() => initializeApollo(initialState), [initialState]);
    return store;
}
