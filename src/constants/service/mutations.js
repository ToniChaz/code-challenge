const CREATE = `{
  article {
    author
    excerpt
    content
    id
    title
    published
    tags
  }
}`

const UPDATE = `{
  article {
    author
    excerpt
    content
    id
    title
    published
    tags
  }
}`

const DELETE = `
  mutation Mutations($id: String!){
    deleteArticle(id: $id){
      id
    }
  }
`

export {
  CREATE,
  UPDATE,
  DELETE
}
