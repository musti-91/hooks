import React, { SFC, useReducer, MouseEvent, useContext, useEffect } from 'react'
import { userReducer, INITIAL_STATE, Store } from '@stores/index'
type E = MouseEvent<HTMLButtonElement>

interface iOwnProps {}

/**
 * @author
 * @function @UserContainer
 **/

const UserContainer: SFC<iOwnProps> = props => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('count'))
    dispatch({ type: 'RESET', count: data.count })
  }, [])

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(state))
  }, [state])

  return (
    <Store.Provider value={state}>
      <>
        <Consumer />
        <button onClick={(e: E) => dispatch({ type: 'INC' })}>+</button>
        <button onClick={(e: E) => dispatch({ type: 'DEC' })}>-</button>
        <button onClick={(e: E) => dispatch({ type: 'RESET' })}>*</button>
      </>
    </Store.Provider>
  )
}

export function Consumer(props: any) {
  const dispatch = useContext(Store)
  return (
    <Store.Consumer>
      {({ count, theme }) => (
        <div style={theme}>
          <h3>Count: {count}</h3>
        </div>
      )}
    </Store.Consumer>
  )
}

export default UserContainer
