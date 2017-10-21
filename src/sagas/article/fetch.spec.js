// fetch.spec.js

import { watchFetchArticles, fetchArticles } from './fetch'
import { ARTICLES_QUERY } from '../../constants/service/queries'
import { articles } from '../../../test/mocks'

describe('fetchArticles saga', () => {
  test('fetchArticles should trigger on every FETCH_ARTICLE action', () => {
    const generator = watchFetchArticles()

    expect(generator.next().value).toMatchSnapshot()
  })

  test('fetchArticles success', () => {
    const generator = fetchArticles(ARTICLES_QUERY)
    const response = {
      data: {
        articles
      }
    }

    expect(generator.next().value).toMatchSnapshot()
    expect(generator.next(response).value).toMatchSnapshot()
    expect(generator.next().done).toMatchSnapshot()
  })

  test('fetchArticles error', () => {
    const generator = fetchArticles(ARTICLES_QUERY)

    expect(generator.next().value).toMatchSnapshot()
    expect(generator.throw({ message: 'Error test' }).value).toMatchSnapshot()
    expect(generator.next().done).toMatchSnapshot()
  })
})
