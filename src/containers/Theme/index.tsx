import React, { SFC, MouseEvent } from 'react'
import Consumer from './Consumer'
interface iOwnProps {
  backgroundColor: string
  color: string
  dispatch: (a: any) => void
}
type E = MouseEvent<HTMLHeadElement>
/**
 * @author
 * @function @ThemeContainer
 **/

const ThemeContainer: SFC<iOwnProps> = ({ backgroundColor, color, dispatch }) => {
  const onThemeChange = (e: E) => {
    document.querySelector('.container').classList.add('dark')
    dispatch({ backgroundColor, color })
  }
  return (
    <div style={{ backgroundColor }}>
      <h3 style={{ color }} onClick={onThemeChange}>
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
