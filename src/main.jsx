import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client'
import App from './App.jsx'

const client = new ApolloClient({
  uri:"https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <B
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </StrictMode>,
)
