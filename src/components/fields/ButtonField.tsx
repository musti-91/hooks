import React, { SFC, MouseEvent } from 'react'

type E = MouseEvent<HTMLButtonElement>
interface iOwnProps {
  title: string
  bgColor?: string | 'lightcoral'
  onButtonClick: (e: E) => void
}

/**
 * @author
 * @function @ButtonField
 **/

const ButtonField: SFC<iOwnProps> = ({ title, onButtonClick, bgColor }) => {
  return (
    <button onClick={onButtonClick} className='btn-field' style={{ backgroundColor: bgColor }}>
      {title}
    </button>
  )
}

export default ButtonField
