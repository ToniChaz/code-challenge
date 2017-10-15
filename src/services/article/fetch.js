import { requestHandler } from '../serviceHandler'

export default function(query) {
  return requestHandler('/graphql', { query })
}
