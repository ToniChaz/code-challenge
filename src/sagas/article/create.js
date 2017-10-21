import { call, put, takeEvery } from 'redux-saga/effects'
import articleService from '../../services/article/create'
import action from '../../actions/article'
import type from '../../constants/actions/article'
import { CREATE } from '../../constants/service/mutations'

export function* createArticle({ article }) {
  try {
    const response = yield call(articleService, CREATE, article)
    yield put(action.createArticleSuccess(response.data.createArticle))
  } catch (error) {
    yield put(action.articlesError(error))
  }
}

export function* watchCreateArticle() {
  yield takeEvery(type.CREATE_ARTICLE, createArticle)
}
