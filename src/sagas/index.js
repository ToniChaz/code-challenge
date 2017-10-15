import { fork, all } from 'redux-saga/effects'
import * as fetchArticle from './article/fetch'
import * as deleteArticle from './article/delete'

export default function* root() {
  yield all([
    fork(fetchArticle.watchFetchArticles),
    fork(deleteArticle.watchDeleteArticle)
  ])
}
