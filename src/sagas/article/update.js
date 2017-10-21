import { call, put, takeEvery } from 'redux-saga/effects'
import articleService from '../../services/article/update'
import action from '../../actions/article'
import type from '../../constants/actions/article'
import { UPDATE } from '../../constants/service/mutations'

export function* updateArticle({ article }) {
  try {
    const response = yield call(articleService, UPDATE, article)
    yield put(action.updateArticleSuccess(response.data.updateArticle))
  } catch (error) {
    yield put(action.articlesError(error))
  }
}

export function* watchUpdateArticle() {
  yield takeEvery(type.UPDATE_ARTICLE, updateArticle)
}
