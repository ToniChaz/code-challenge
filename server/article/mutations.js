import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql'
import { articleType, articleInputType } from './types'
import { Article } from './model'

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
      resolve: async (value, { article }) => {
        await Article.create(article)
        return article
      }
    },
    updateArticle: {
      type: articleType,
      description: 'Update a new article',
      args: {
        article: { type: articleInputType }
      },
      resolve: async (value, { article }) => {
        await Article.update(
          { _id: article.id },
          {
            author: article.author,
            excerpt: article.excerpt,
            content: article.content,
            title: article.title,
            published: article.published,
            tags: article.tags
          }
        )
        return article
      }
    },
    deleteArticle: {
      type: articleType,
      description: 'Delete an article',
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (value, { id }) => {
        await Article.remove({ _id: id })
        return { id }
      }
    }
  })
})

export default Mutations
