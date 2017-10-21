import { call, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import articleService from '../../services/article/delete'
import action from '../../actions/article'
import alertAction from '../../actions/alert'
import type from '../../constants/actions/article'
import { DELETE } from '../../constants/service/mutations'

export function* deleteArticle({ articleId }) {
  try {
    const response = yield call(articleService, DELETE, articleId)
    yield put(action.deleteArticleSuccess(response.data.deleteArticle.id))
    yield put(alertAction.openAlert('success', 'The article has been deleted successfully'))
    yield put(push('/'))
  } catch (error) {
    yield put(alertAction.openAlert('danger', `An error occurred: ${error.message}`))
  }
}

export function* watchDeleteArticle() {
  yield takeEvery(type.DELETE_ARTICLE, deleteArticle)
}
