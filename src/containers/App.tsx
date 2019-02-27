import React from 'react'
import TodoContainer from '@containers/TodoContainer'

const App = () => {
  return (
    <div className='container'>
      <h2>Hooks</h2>
      <TodoContainer name='TodoContainer' />
    </div>
  )
}

export default App
