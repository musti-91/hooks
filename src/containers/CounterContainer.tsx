import React, { FC, useState, MouseEvent, useEffect } from 'react'

import { Link } from 'react-router-dom'
import TextField from '@components/fields/TextField'
import ButtonField from '@components/fields/ButtonField'

type E = MouseEvent<HTMLButtonElement>

interface iOwnProps {}

/**
 * @author
 * @function @CounterContainer
 **/

const CounterContainer: FC<iOwnProps> = props => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('count'))
    setCount(previousCount => previousCount + data)
  }, []) // this called DEPS

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])

  return (
    <>
      <Link to='/' className='link'>
        back
      </Link>
      <TextField title={`count: ${count}`} />
      <div className='nav'>
        <ButtonField onButtonClick={(e: E) => setCount(count + 1)} title='+' />
        <ButtonField onButtonClick={(e: E) => setCount(count - 1)} title='-' />
        <ButtonField onButtonClick={(e: E) => setCount(0)} title='*' />
      </div>
    </>
  )
}
export default CounterContainer
