import type from '../constants/actions/article'

export function initialState() {
  return {
    articles: null,
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

function fetchArticlesSuccess(state, { articles }) {
  return {
    ...state,
    articles,
    loading: false,
    error: null
  }
}

function fetchArticlesError(state, { error }) {
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
    case type.FETCH_ARTICLES_SUCCESS:
      return fetchArticlesSuccess(state, action)
    case type.FETCH_ARTICLES_ERROR:
      return fetchArticlesError(state, action)
    default:
      return state
  }
}
