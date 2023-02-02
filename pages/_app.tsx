// @ts-nocheck
import '@/styles/globals.css';
import type {AppProps} from 'next/app'
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import {ApolloLink} from 'apollo-link';
import {onError} from 'apollo-link-error';

const GITHUB_URL = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
    uri: GITHUB_URL,
    headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
    },
});

const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.map(({message, locations, path}) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );
    }

    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

const link = ApolloLink.from([errorLink, httpLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
    link,
    cache,
});

function App({Component, pageProps}: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default App;
