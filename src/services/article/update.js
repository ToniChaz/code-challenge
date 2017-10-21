import { requestHandler } from '../serviceHandler'

export default function(mutation, article) {
  return requestHandler('/graphql', mutation, { article })
}
