import { useReducer } from 'react'
import iUser from '@models/iUser'
interface iState {
  user: iUser
  users: iUser[]
  startFetching: boolean
}

export const INITIAL_STATE: iState = {
  user: null,
  users: [],
  startFetching: false
}

export const logger = (store: any) => (next: any) => (action: any) => {
  console.log(action)
  next(action)
}

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'START_FETCHING':
      state = { ...state, startFetching: true }
      break

    case 'FETCH_FULFILLED':
      state = { ...state, users: action.users, startFetching: false }
      break

    case 'ADD_USER':
      let { user } = action

      state = { ...state, user, users: [...state.users, user] }

    case 'DELETE_USER':
      state = { ...state, users: state.users.filter(user => user.id !== action.id) }
    default:
      state = { ...state }
  }

  return state
}

// https://medium.com/maxime-heckel/rebuilding-redux-with-hooks-and-context-e16b59faf51c
const compose = (...funcs: any) => (x: any) =>
  funcs.reduceRight((composed: any, f: any) => f(composed), x)

// custom hooks with reducer
export const createStore = (middlewares: any[]) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  if (typeof middlewares !== undefined) {
    const middlewareApi = {
      getState: () => state,
      dispatch: (action: any) => dispatch(action)
    }
    const chain = middlewares.map(md => md(middlewareApi))
    const enhanceDispatch = compose(...chain)(dispatch)
    return { state, dispatch, enhanceDispatch }
  }
  return { state, dispatch }
}
