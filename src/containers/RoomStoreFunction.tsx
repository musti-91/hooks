import React, { SFC, createContext, useContext, useReducer } from 'react'

interface iOwnProps {
  isLit: boolean
  onToggleLight: any
}
const initialState: iOwnProps = {
  isLit: false,
  onToggleLight: null
}
const RoomContext = createContext({
  state: initialState,
  dispatch: null
})
/**
 * @author
 * @function @RoomStoreFunction
 **/
const reducer = (state: iOwnProps, action: any) => {
  switch (action.type) {
    case 'toggle':
      return { ...state, isLit: !state.isLit }
    default:
      return state
  }
  return state
}
const RoomStoreFunction: SFC<iOwnProps> = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <RoomContext.Provider value={{ state, dispatch }}>
      <RoomContextConsumer />
    </RoomContext.Provider>
  )
}

const RoomContextConsumer: SFC<any> = props => {
  const state = useContext(RoomContext) // this return state from provider
  return (
    <RoomContext.Consumer>
      {({ state, dispatch }) => (
        <div>
          <h2>{state.isLit ? 'is Lit' : 'dark'}</h2>
          <button onClick={() => dispatch({ type: 'toggle' })}>Flip</button>
        </div>
      )}
    </RoomContext.Consumer>
  )
}
export default RoomStoreFunction
