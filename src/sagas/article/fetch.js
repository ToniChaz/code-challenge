import { call, put, takeEvery } from 'redux-saga/effects'
import articleService from '../../services/article/fetch'
import action from '../../actions/article'
import type from '../../constants/actions/article'

export function* fetchArticles({ query }) {
  try {
    const response = yield call(articleService, query)
    yield put(action.fetchArticlesSuccess(response.data))
  } catch (error) {
    yield put(action.fetchArticlesError(error))
  }
}

export function* watchFetchArticles() {
  yield takeEvery(type.FETCH_ARTICLES, fetchArticles)
}
