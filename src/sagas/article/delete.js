import { call, put, takeEvery } from 'redux-saga/effects'
import articleService from '../../services/article/delete'
import action from '../../actions/article'
import type from '../../constants/actions/article'
import { DELETE } from '../../constants/service/mutations'

export function* deleteArticle() {
  try {
    const response = yield call(articleService, DELETE)
    yield put(action.fetchArticlesSuccess(response.data.articles))
  } catch (error) {
    yield put(action.fetchArticlesError(error))
  }
}

export function* watchDeleteArticle() {
  yield takeEvery(type.DELETE_ARTICLE, deleteArticle)
}
