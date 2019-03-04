import { createContext, useReducer, useDebugValue } from 'react'

interface iState {
  count: number
  theme?: any
  element?: any
}

const themes = {
  N: {
    backgroundColor: 'coral'
  },
  DARK: {
    backgroundColor: '#111'
  },
  LIGHT: {
    backgroundColor: 'green'
  }
}

const state: iState = {
  count: 0,
  theme: themes.N,
  element: null
}

interface Action {
  type: string
  count?: number
  element?: any
}

const changeTheme = (element: any, theme: any) => {
  return (element.style.backgroundColor = theme)
}

function reducer(state: iState, action: Action) {
  switch (action.type) {
    case 'INC':
      return (state = {
        count: state.count + 1,
        element: action.element ? changeTheme(action.element, 'coral') : 'not  specified '
      })
    case 'DEC':
      return (state = {
        count: state.count - 1,
        element: action.element ? changeTheme(action.element, 'lightgreen') : 'not  specified '
      })
    case 'RESET':
      return (state = {
        count: action.count ? action.count : 0,
        element: action.element ? changeTheme(action.element, 'red') : 'not  specified '
      })
    default:
      return state
  }
}

// const logger = (state: () => any) => (next: () => any) => (action: any) => {
//   log(action)
//   next()
// }

const logger = (prev: iState, next: iState) => {
  let timesOfChanges: number = 0
  console.log(`%c> prevState: @${new Date().toLocaleTimeString()}`, 'color: #016BB7;')
  console.log(prev)
  console.count('changes')
  console.log(`%c> next State: @${new Date().toLocaleTimeString()}`, 'color: #016BB7;')
  console.log(next)
  return timesOfChanges
}

function createStore<T>(reducer: any, init: iState | T) {
  const [state, dispatch] = useReducer(reducer, init)
  return { state, dispatch }
}

const date = new Date()
useDebugValue(date, date => date.toISOString())
const Store = createContext(state, logger)

export { reducer as userReducer, state as INITIAL_STATE, Store, createStore }
