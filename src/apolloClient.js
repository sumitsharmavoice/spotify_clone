import { ApolloClient, InMemoryCache } from "@apollo/client";


const Client = new ApolloClient({
    uri: ' https://song-tc.pixelotech.com/graphql',
    cache: new InMemoryCache()
});

export default Client;