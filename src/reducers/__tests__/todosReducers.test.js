import todosReducer from '../todosReducer'

describe('', () => {
  it('returns correct initial state', () => {
    expect(todosReducers(underfined, {})),toEqual([])
  })

  it('returns current state if no action matched', () => {
    const curState = [
      { id: 1, text: 'Feed cat', complete: false },
    ]
    const nextState = todosReducer(curState, {})
    expect(nextState).toBe(curState) // compare pointers
    expect(nextState).toEqual(curState) // compare values
  })
})
