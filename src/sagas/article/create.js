import { call, put, takeEvery } from 'redux-saga/effects'
import articleService from '../../services/article/create'
import action from '../../actions/article'
import type from '../../constants/actions/article'
import { CREATE } from '../../constants/service/mutations'
import setTags from '../../utils/setTags'
import setExcerpt from '../../utils/setExcerpt'

export function* createArticle({ article }) {
  try {
    const newArticle = {
      ...article,
      ...{
        tags: setTags(article),
        excerpt: setExcerpt(article),
        published: article.published === '' || article.published === 'true'
      }
    }
    const response = yield call(articleService, CREATE, newArticle)
    yield put(action.createArticleSuccess(response.data.createArticle))
  } catch (error) {
    yield put(action.articlesError(error))
  }
}

export function* watchCreateArticle() {
  yield takeEvery(type.CREATE_ARTICLE, createArticle)
}
