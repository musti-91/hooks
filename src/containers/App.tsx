import React, { useState, useEffect, FC, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import withLoading from '@components/hoc/withLoading'
import mainImage from '@assets/egg-1.png'
import ThemeContainer from './Theme/index'
import Provider from '@containers/Theme/Provider'
import Example from '@containers/Example'
interface iProps {
  name?: string | 'App Name'
}

type E = FormEvent<HTMLInputElement>
const App: FC<iProps> = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [theme, setTheme] = useState({ backgroundColor: '#449944', color: '#fff' })

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    // <div className='app'>
    //   <Provider theme={theme} setTheme={setTheme}>
    //     <ThemeContainer />
    //   </Provider>
    //   <h2>Hooks</h2>
    //   <p>Getting the width of window is the simple example of hooks: {width}px</p>
    //   <div className='nav'>
    //     <Link to='/todos' className='link'>
    //       Todos
    //     </Link>
    //     <Link to='/users' className='link'>
    //       Users
    //     </Link>
    //     <Link to='/count' className='link'>
    //       Counter
    //     </Link>
    //     <Link to='/repos' className='link'>
    //       Repositories
    //     </Link>
    //     <Link to='/room' className='link'>
    //       Room
    //     </Link>
    //   </div>
    //   <img src={mainImage} alt='main-image' className='main-image' />
    // </div>
    <Example />
  )
}

export default withLoading(App)
