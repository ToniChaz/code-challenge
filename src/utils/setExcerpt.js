export default function(article) {
  if (article.content.length > 100) {
    return article.content.substring(0, 100)
  }
  return article.content
}
