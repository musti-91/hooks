import React, { createContext } from 'react'
interface iState {
  backgroundColor: string
  color: string
}
interface iThemeContext {
  state: iState
  dispatch: any
}
const initialState: iThemeContext = {
  state: null,
  dispatch: null
}
const ThemeContext = createContext(initialState)
export default ThemeContext
