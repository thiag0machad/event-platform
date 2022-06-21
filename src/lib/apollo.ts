import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o3s9pq0eum01xi5zl1hd21/master',
  // Armazena em cache as requisições, se caso você requisitar um dado que já foi requisitado e está em cache, ele te entrega os dados sem precisar requisitar
  cache: new InMemoryCache(),
})
