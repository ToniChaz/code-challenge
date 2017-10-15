import { requestHandler } from '../serviceHandler'

export default function(deleteArticle, articleId) {
  return requestHandler('/graphql', { mutation: deleteArticle(articleId) })
}
