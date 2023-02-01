import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import {ApolloLink} from 'apollo-link';
import {onError} from 'apollo-link-error';
import paginationField from "@/lib/PaginationField";

const GITHUB_URL = 'https://api.github.com/graphql';

// TODO colocar em env o token     console.log('FFF', process.env.REACT_APP_GITHUB_ACCESS_TOKEN);
// const client = new ApolloClient({
//     uri: GITHUB_URL,
//     cache: new InMemoryCache(),
//     headers: {
//         authorization: 'Bearer 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',
//     },
// });

const httpLink = new HttpLink({
    uri: GITHUB_URL,
    headers: {
        authorization: 'Bearer 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',
    },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
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

// @ts-ignore
// const cache = new InMemoryCache({
//     typePolicies: {
//         Query: {
//             fields: {
//                 // @ts-ignore
//                 repository: paginationField(),
//             },
//         },
//     },
// })

const cache = new InMemoryCache();

// const initCache = (initialState?: any) => {
//     return new InMemoryCache({
//         typePolicies: {
//             Query: {
//                 fields: {
//                     // @ts-ignore
//                     allIssues: paginationField(),
//                 },
//             },
//         },
//     }).restore(initialState || {});
// };

// @ts-ignore
const client = new ApolloClient({
    link: httpLink,
    link,
    cache,
});

export default function App({Component, pageProps}: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

// give me my app and inject it with the apollo client, inside of it
// export default withData(App);

