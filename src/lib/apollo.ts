import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qdfyet3xb901xl3bt49284/master',
    cache: new InMemoryCache()
})