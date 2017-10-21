// Article.spec.js

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Article from './Article'

import { articles, article } from '../../test/mocks'

describe('Testing Article', () => {
  test('Renders correctly without articles', () => {
    const history = {
      push: jest.fn()
    }
    const tree = shallow(
      <Article history={history} />
    )
    expect(shallowToJson(tree)).toMatchSnapshot()
  })

  test('Renders correctly with articles', () => {
    const filterArticle = jest.fn()
    const match = { params: { articleId: '59eb8261d2ddc040ead6c7fa' } }
    const tree = shallow(
      <Article articles={articles} article={article} filterArticle={filterArticle} match={match} />
    )
    expect(shallowToJson(tree)).toMatchSnapshot()
  })
})
