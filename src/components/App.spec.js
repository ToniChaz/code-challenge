// App.spec.js

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import App from './App'

describe('Testing App', () => {
  test('Renders correctly', () => {
    const tree = shallow(
      <App />
    )
    expect(shallowToJson(tree)).toMatchSnapshot()
  })
})
