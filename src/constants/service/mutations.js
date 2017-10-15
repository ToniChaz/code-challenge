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

const DELETE = articleId => `{
 deleteArticle(id: ${articleId}) {
    status
  }
}`

export {
  CREATE,
  UPDATE,
  DELETE
}
