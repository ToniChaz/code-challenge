// article.spec.js

import article from './article'
import { article as articleMock } from '../../test/mocks'

describe('Article action', () => {
  test('fetch', () => {
    expect(article.fetchArticles()).toMatchSnapshot()
  })

  test('filterArticle', () => {
    expect(article.filterArticle(
      { articleId: '59eb8261d2ddc040ead6c7fa' },
      () => 'resolve',
      () => 'reject'
    )).toMatchSnapshot()
  })

  test('deleteArticle', () => {
    expect(article.deleteArticle(
      { articleId: '59eb8261d2ddc040ead6c7fa' },
      () => 'resolve',
      () => 'reject'
    )).toMatchSnapshot()
  })

  test('updateArticle', () => {
    expect(article.deleteArticle(
      { articleMock },
      () => 'resolve',
      () => 'reject'
    )).toMatchSnapshot()
  })

  test('createArticle', () => {
    expect(article.deleteArticle(
      { articleMock },
      () => 'resolve',
      () => 'reject'
    )).toMatchSnapshot()
  })
})
