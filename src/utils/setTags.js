export default function(article) {
  if (article.tags instanceof Array) {
    return article.tags
  }
  return article.tags.split(',')
}
