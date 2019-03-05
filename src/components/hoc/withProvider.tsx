import React, { ComponentType, useReducer, createContext } from 'react'

interface injectedProps {
  state: any
  dispatch: any
}
/**
 * @author
 * @function @withProvider
 **/

const withProvider = (reducer: any, initialState: any) => <P extends object>(
  WrappedComponent: ComponentType<injectedProps>
) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const Store = createContext({ state, dispatch })
  return (
    <Store.Provider value={{ state, dispatch }}>
      <Store.Consumer>{({ state, dispatch }) => <WrappedComponent state={state} dispatch={dispatch} />}</Store.Consumer>
    </Store.Provider>
  )
}

export default withProvider
