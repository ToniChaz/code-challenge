import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    excerpt: {
      type: GraphQLString
    },
    id: {
      type: GraphQLString
    },
    published: {
      type: GraphQLBoolean
    },
    tags: {
      type: new GraphQLList(GraphQLString)
    },
    title: {
      type: GraphQLString
    }
  })
})

const articleInputType = new GraphQLInputObjectType({
  name: 'ArticleInput',
  fields: () => ({
    author: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    excerpt: {
      type: GraphQLString
    },
    id: {
      type: GraphQLString
    },
    published: {
      type: GraphQLBoolean
    },
    tags: {
      type: new GraphQLList(GraphQLString)
    },
    title: {
      type: GraphQLString
    }
  })
})

export {
  articleType,
  articleInputType
}
