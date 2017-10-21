import type from '../constants/actions/article'

export default {
  fetchArticles: () => ({ type: type.FETCH_ARTICLES }),
  filterArticle: articleId => ({ type: type.FILTER_ARTICLE, articleId }),
  deleteArticle: articleId => ({ type: type.DELETE_ARTICLE, articleId }),
  updateArticle: article => ({ type: type.UPDATE_ARTICLE, article }),
  createArticle: article => ({ type: type.CREATE_ARTICLE, article }),
  fetchArticlesSuccess: articles => ({ type: type.FETCH_ARTICLES_SUCCESS, articles }),
  deleteArticleSuccess: articleId => ({ type: type.DELETE_ARTICLE_SUCCESS, articleId }),
  updateArticleSuccess: article => ({ type: type.UPDATE_ARTICLE_SUCCESS, article }),
  createArticleSuccess: article => ({ type: type.CREATE_ARTICLE_SUCCESS, article })
}
