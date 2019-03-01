import React, { SFC, useReducer, MouseEvent } from 'react'
import { userReducer, INITIAL_STATE, Store, createStore } from '@stores/index'
type E = MouseEvent<HTMLButtonElement>

interface iOwnProps {}

/**
 * @author
 * @function @UserContainer
 **/

const UserContainer: SFC<iOwnProps> = props => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

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
  return (
    <Store.Consumer>{({ theme, count }) => <div style={theme}>Count: {count}</div>}</Store.Consumer>
  )
}

export default UserContainer
