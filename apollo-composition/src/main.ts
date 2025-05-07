import { createApp, h } from 'vue'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'


const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql'
})

const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000/graphql',
    options: {
        reconnect: true
    }
})

const cache = new InMemoryCache()

const link = split(
    ({query})=> {
        const definition = getMainDefinition(query)
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        )
    },
    wsLink,
    httpLink
)

const apolloClient = new ApolloClient({
    link: link,
    cache
})

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})


createApp({
    
    render: () => h(App)

}).use(apolloProvider).mount('#app')
