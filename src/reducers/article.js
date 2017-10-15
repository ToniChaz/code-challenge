import type from '../constants/actions/article'

export function initialState() {
  return {
    articles: null,
    article: null,
    loading: true,
    error: null
  }
}

function fetchArticles(state) {
  return {
    ...state,
    loading: true,
    error: null
  }
}

function filterArticle(state, { articleId }) {
  return {
    ...state,
    articles: state.articles,
    article: state.articles.filter(article => article.id === articleId)
  }
}

function fetchArticlesSuccess(state, { articles }) {
  return {
    ...state,
    articles,
    loading: false,
    error: null
  }
}

function deleteArticlesSuccess(state, { articleId }) {
  return {
    ...state,
    articles: state.articles.filter(article => article.id !== articleId),
    loading: false,
    error: null
  }
}

function articlesError(state, { error }) {
  return {
    ...state,
    loading: false,
    error
  }
}

export default function(state = initialState(), action) {
  switch (action.type) {
    case type.FETCH_ARTICLES:
      return fetchArticles(state, action)
    case type.FILTER_ARTICLE:
      return filterArticle(state, action)
    case type.FETCH_ARTICLES_SUCCESS:
      return fetchArticlesSuccess(state, action)
    case type.DELETE_ARTICLE_SUCCESS:
      return deleteArticlesSuccess(state, action)
    case type.ARTICLES_ERROR:
      return articlesError(state, action)
    default:
      return state
  }
}
