import type from '../constants/actions/article'

export default {
  fetchArticles: () => ({ type: type.FETCH_ARTICLES }),
  fetchArticlesSuccess: articles => ({ type: type.FETCH_ARTICLES_SUCCESS, articles }),
  fetchArticlesError: error => ({ type: type.FETCH_ARTICLES_ERROR, error })
}
