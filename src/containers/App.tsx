import React, { useState, useEffect, useReducer } from 'react'
import TodoContainer from '@containers/TodoContainer'
import UserContainer from './UserContainer'

const App = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div className='container'>
      <UserContainer />
      <h2>Hooks</h2>
      <p>initial width: {width}px</p>
      <TodoContainer name='TodoContainer' />
    </div>
  )
}

export default App
