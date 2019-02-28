import React, { useState, useEffect } from 'react'
import TodoContainer from '@containers/TodoContainer'

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
      <h2>Hooks</h2>
      <p>initial width: {width}px</p>
      <TodoContainer name='TodoContainer' />
    </div>
  )
}

export default App
