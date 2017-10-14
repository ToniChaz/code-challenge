import { fork, all } from 'redux-saga/effects'
import * as fetchArticle from './article/fetch'

export default function* root() {
  yield all([
    fork(fetchArticle.watchFetchArticles)
  ])
}
