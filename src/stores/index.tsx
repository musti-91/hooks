import React, { createContext, useReducer, Reducer, Dispatch } from 'react'
import { log } from '@utils/log'

interface iState {
  count: number
  theme?: any
  element?: any
}

const themes = {
  N: {
    backgroundColor: 'red'
  },
  DARK: {
    foreground: '#000',
    backgroundColor: '#111'
  },
  LIGHT: {
    foreground: '#FFF',
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
  return (element.style = theme)
}

function reducer(state: iState, action: Action) {
  switch (action.type) {
    case 'INC':
      return (state = {
        count: state.count + 1,
        element: action.element && changeTheme(action.element, themes.DARK)
      })
    case 'DEC':
      return (state = {
        count: state.count - 1,
        element: action.element && changeTheme(action.element, themes.LIGHT)
      })
    case 'RESET':
      return (state = {
        count: 0,
        element: action.element && changeTheme(action.element, themes.N)
      })
    default:
      return state
  }
}

const logger = (state: () => any) => (next: () => any) => (action: any) => {
  log(action)
  next()
}

function createStore<T>(reducer: any, init: iState | T) {
  const [state, dispatch] = useReducer(reducer, init)
  return { state, dispatch }
}

const Store = createContext(state)

export { reducer as userReducer, state as INITIAL_STATE, Store, createStore }
