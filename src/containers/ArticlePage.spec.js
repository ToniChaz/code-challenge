import { mapDispatchToProps } from './ArticlesPage'
import { initialState } from '../reducers/article'

describe('ArticlesPage container', () => {
  test('should map ArticlesPage state props', () => {
    const state = initialState()
    expect(state).toMatchSnapshot()
  })

  test('should map ArticlesPage actions creators in a prop called "actions"', () => {
    const myMock = jest.fn()
    const mappedActions = mapDispatchToProps(myMock)

    const actionsPropNames = Object.keys(mappedActions)

    expect(actionsPropNames).toMatchSnapshot()
  })
})
