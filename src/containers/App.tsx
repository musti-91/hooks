import React, { useState, useEffect, FC } from 'react'
import CounterContainer from './CounterContainer'
import withLoading from '@components/hoc/withLoading'

interface iProps {
  name?: string | 'App Name'
}
const App: FC<iProps> = () => {
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
      <p>description...</p>
    </div>
  )
}

export default withLoading(App)
