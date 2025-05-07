import { createApp, provide, h } from 'vue'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
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

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
})

createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App)

}).mount('#app')
