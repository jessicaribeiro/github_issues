import {ApolloClient,InMemoryCache} from "@apollo/client";

export const getApolloClient = () => {
    return new ApolloClient({
        uri: 'https://api.github.com/graphql',
        cache: new InMemoryCache()
    });
};

// TODO
// The above function is instantiating an ApolloClient by passing in the URI of our ApolloServer and a cache where ApolloClient will save its cached queries. Navigate to the pages/_app.tsx and import the ApolloProvider and getApolloClient functions as follows.