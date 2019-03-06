import React, { useState, useEffect, FC, ComponentType } from 'react'
import spinner from '@assets/spinner.svg'
interface iProps {
  name?: string | ''
  time?: number | 750
}

const withLoading = <P extends object>(Component: ComponentType<P>): FC<P & iProps> => ({ ...props }: iProps | {}) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const handleLoading = () => setLoading(false)
    setTimeout(handleLoading, 750)
  }, [])
  return loading ? (
    <div className='spinner'>
      <img src={spinner} alt='spinner' />
    </div>
  ) : (
    // https://github.com/Microsoft/TypeScript/issues/28938
    <Component {...props as P} />
  )
}

export default withLoading
