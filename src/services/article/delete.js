import { requestHandler } from '../serviceHandler'

export default function(mutation, articleId) {
  return requestHandler('/graphql', mutation, { id: articleId })
}
