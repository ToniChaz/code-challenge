// article.spec.js

import articleActions from '../actions/article'
import articleReducer, { initialState } from './article'

import { articles, article } from '../../test/mocks'

describe('reducers article', () => {
  const state = {
    ...initialState()
  }

  test('should handle initial state', () => {
    expect(articleReducer(undefined, { type: '' })).toMatchSnapshot()
  })

  test('fetchArticles', () => {
    expect(articleReducer(state, articleActions.fetchArticles())).toMatchSnapshot()
  })

  test('fetchArticlesSuccess', () => {

    expect(articleReducer(state, articleActions.fetchArticlesSuccess({ articles }))).toMatchSnapshot()
  })

  test('filterArticle', () => {
    const deleteArticleState = {
      ...initialState(),
      articles,
      article
    }

    expect(articleReducer(deleteArticleState, articleActions.filterArticle({ articleId: '59eb8261d2ddc040ead6c7fa' }))).toMatchSnapshot()
  })
})
