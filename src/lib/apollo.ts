import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
  },
  // Armazena em cache as requisições, se caso você requisitar um dado que já foi requisitado e está em cache, ele te entrega os dados sem precisar requisitar
  cache: new InMemoryCache(),
})
