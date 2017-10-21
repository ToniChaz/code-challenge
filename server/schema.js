import { GraphQLSchema } from 'graphql'
import Query from './article/query'
import Mutations from './article/mutations'

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutations
})

export default Schema
