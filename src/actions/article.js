import type from '../constants/actions/article'

export default {
  fetchArticles: () => ({ type: type.FETCH_ARTICLES }),
  filterArticle: articleId => ({ type: type.FILTER_ARTICLE, articleId }),
  fetchArticlesSuccess: articles => ({ type: type.FETCH_ARTICLES_SUCCESS, articles }),
  fetchArticlesError: error => ({ type: type.FETCH_ARTICLES_ERROR, error })
}
