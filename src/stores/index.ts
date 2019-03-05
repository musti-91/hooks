import { createContext, useReducer, Dispatch } from 'react'
import iUser from '@models/iUser'

// const logger = (state: () => any) => (next: () => any) => (action: any) => {
//   log(action)
//   next()
// }

interface iUserState {
  users: iUser[]
  user: iUser
  fetching: boolean
  fetchingError: any
}
const INITIAL_STATE: iUserState = {
  users: [],
  user: null,
  fetching: false,
  fetchingError: null
}
enum Types {
  FETCHING = 'FETCHING',
  FETCHING_ERROR = 'FETCHING_ERROR',
  FETCHING_FULFILLED = 'FETCHING_FULFILLID'
}
interface ActionType {
  type: Types
  payload?: any
}
const reducer = (state: iUserState, action: ActionType) => {
  switch (action.type) {
    case Types.FETCHING:
      return { ...state, fetching: true }
    case Types.FETCHING_FULFILLED:
      return { ...state, fetching: false, users: action.payload }
    case Types.FETCHING_ERROR:
      return { ...state, fetching: false, users: [], fetchingError: action.payload }
    default:
      return state
  }
}

interface iContextType {
  state: iUserState
  dispatch: Dispatch<ActionType>
}

const logger = (prev: iContextType, next: iContextType) => {
  let timesOfChanges: number = 0
  console.log(`%c> prevState: @${new Date().toLocaleTimeString()}`, 'color: #016BB7;')
  console.log(prev.state)
  console.count('changes')
  console.log(`%c> next State: @${new Date().toLocaleTimeString()}`, 'color: #016BB7;')
  console.log(next.state)
  return timesOfChanges
}

function createStore() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const Store = createContext({ state, dispatch }, logger)
  return { Store, state, dispatch }
}

export { Types as ActionTypes, reducer as userReducer, createStore, INITIAL_STATE }
