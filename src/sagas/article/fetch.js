import { call, put, takeEvery } from 'redux-saga/effects'
import articleService from '../../services/article/fetch'
import action from '../../actions/article'
import type from '../../constants/actions/article'
import { ARTICLES_QUERY } from '../../constants/querys/queries'

export function* fetchArticles() {
  try {
    const response = yield call(articleService, ARTICLES_QUERY)
    yield put(action.fetchArticlesSuccess(response.data.articles))
  } catch (error) {
    yield put(action.fetchArticlesError(error))
  }
}

export function* watchFetchArticles() {
  yield takeEvery(type.FETCH_ARTICLES, fetchArticles)
}
