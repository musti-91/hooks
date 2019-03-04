import React, { SFC } from 'react'

type E = HTMLButtonElement
interface iOwnProps {
  title: string
  onButtonClick: (e: E) => void
}

/**
 * @author
 * @function @ButtonField
 **/

const ButtonField: SFC<iOwnProps> = ({ title, onButtonClick }) => {
  return <button onClick={() => onButtonClick}>{title}</button>
}

export default ButtonField
