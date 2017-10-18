const CREATE = `
  mutation Mutations($article: ArticleInput!){
    createArticle(article: $article){
      author
      excerpt
      content
      id
      title
      published
      tags
    }
  }
`

const UPDATE = `
  mutation Mutations($article: ArticleInput!){
    updateArticle(article: $article){
      author
      excerpt
      content
      id
      title
      published
      tags
    }
  }
`

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