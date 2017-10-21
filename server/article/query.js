import { GraphQLObjectType, GraphQLList } from 'graphql'
import { Article } from './model'
import { articleType } from './types'

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return Article.find()
      }
    }
  })
})

export default Query
