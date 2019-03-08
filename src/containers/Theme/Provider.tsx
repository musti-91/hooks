import React, { SFC } from 'react'

import ThemeContext from './Context'

interface iOwnProps {
  theme: any
  setTheme: (t: any) => void
}

/**
 * @author
 * @function @Provider
 **/

const Provider: SFC<iOwnProps> = ({ theme, setTheme, children }) => {
  return (
    <ThemeContext.Provider value={{ state: theme, dispatch: setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default Provider
