import { call, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import articleService from '../../services/article/create'
import action from '../../actions/article'
import alertAction from '../../actions/alert'
import modalAction from '../../actions/modal'
import type from '../../constants/actions/article'
import { CREATE } from '../../constants/service/mutations'

export function* createArticle({ article }) {
  try {
    const response = yield call(articleService, CREATE, article)
    yield put(action.createArticleSuccess(response.data.createArticle))
    yield put(alertAction.openAlert('success', 'The article has been saved successfully'))
    yield put(modalAction.closeModal())
    yield put(push('/'))
  } catch (error) {
    yield put(alertAction.openAlert('danger', `An error occurred: ${error.message}`))
  }
}

export function* watchCreateArticle() {
  yield takeEvery(type.CREATE_ARTICLE, createArticle)
}
