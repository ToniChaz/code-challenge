import { call, put, takeEvery } from 'redux-saga/effects'
import articleService from '../../services/article/delete'
import action from '../../actions/article'
import type from '../../constants/actions/article'
import { DELETE } from '../../constants/service/mutations'

export function* deleteArticle({ articleId }) {
  try {
    const response = yield call(articleService, DELETE, articleId)
    yield put(action.fetchArticlesSuccess(response.data.id))
  } catch (error) {
    yield put(action.fetchArticlesError(error))
  }
}

export function* watchDeleteArticle() {
  yield takeEvery(type.DELETE_ARTICLE, deleteArticle)
}
