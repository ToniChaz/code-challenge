import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull
} from 'graphql'
import db from './db'

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

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return db.Article.find()
      }
    }
  })
})

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  description: 'These are the things we can change',
  fields: () => ({
    createArticle: {
      type: articleType,
      description: 'Create a new article',
      args: {
        article: { type: articleInputType }
      },
      resolve: (value, { article }) => {
        return db.Article.create(article)
      }
    },
    updateArticle: {
      type: articleType,
      description: 'Update a new article',
      args: {
        article: { type: articleInputType }
      },
      resolve: (value, { article }) => {
        return db.Article.update(article)
      }
    },
    deleteArticle: {
      type: articleType,
      description: 'Delete an article',
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (value, { id }) => {
        return db.Article.delete(id)
      }
    }
  })
})

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutations
})

export default Schema
