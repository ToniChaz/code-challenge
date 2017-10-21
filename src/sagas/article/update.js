import { call, put, takeEvery } from 'redux-saga/effects'
import articleService from '../../services/article/update'
import action from '../../actions/article'
import alertAction from '../../actions/alert'
import modalAction from '../../actions/modal'
import type from '../../constants/actions/article'
import { UPDATE } from '../../constants/service/mutations'

export function* updateArticle({ article }) {
  try {
    const response = yield call(articleService, UPDATE, article)
    yield put(action.updateArticleSuccess([response.data.updateArticle]))
    yield put(alertAction.openAlert('success', 'The article has been updated successfully'))
    yield put(modalAction.closeModal())
  } catch (error) {
    yield put(alertAction.openAlert('danger', `An error occurred: ${error.message}`))
  }
}

export function* watchUpdateArticle() {
  yield takeEvery(type.UPDATE_ARTICLE, updateArticle)
}
