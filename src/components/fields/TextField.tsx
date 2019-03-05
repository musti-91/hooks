import React, { SFC, MouseEvent } from 'react'

type E = MouseEvent<HTMLButtonElement>

interface iProps {
  title: string
  error?: any
}
/**
 * @author
 * @function @TextField
 **/

const TextField: SFC<iProps> = ({ title, error, children }) => {
  return (
    <div>
      {error && <h3 style={{ color: 'red' }}>{JSON.stringify(error)}</h3>}
      <h3>{title}</h3>
      {children}
    </div>
  )
}

export default TextField
