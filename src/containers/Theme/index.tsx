import React, { SFC } from 'react'
import Consumer from './Consumer'
interface iOwnProps {
  backgroundColor: string
  color: string
  dispatch: (a: any) => void
}

/**
 * @author
 * @function @ThemeContainer
 **/

const ThemeContainer: SFC<iOwnProps> = ({ backgroundColor, color, dispatch }) => {
  return (
    <div style={{ backgroundColor }}>
      <h3
        style={{ color: color }}
        onClick={() => dispatch({ backgroundColor: '#777', color: '#1234' })}>
        ThemeContainer
      </h3>
    </div>
  )
}
const mergeProps = (theme: any): iOwnProps => ({
  backgroundColor: theme.backgroundColor,
  color: theme.color,
  dispatch: theme.dispatch
})
export default Consumer(mergeProps)(ThemeContainer)
