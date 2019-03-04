import React, { FC, useReducer, MouseEvent, useEffect, SFC } from 'react'
import { userReducer, INITIAL_STATE, Store } from '@stores/index'

import TextField from '@components/fields/TextField'
import withLoading from '@components/hoc/withLoading'

type E = MouseEvent<HTMLButtonElement>

interface iOwnProps {}

/**
 * @author
 * @function @CounterContainer
 **/

const CounterContainer: SFC<iOwnProps> = props => {
  // const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

  // useEffect(() => {
  //   let data = JSON.parse(localStorage.getItem('count'))
  //   dispatch({ type: 'RESET', count: data.count })
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('count', JSON.stringify(state))
  // }, [state])

  return (
    // <Store.Provider value={state}>
    //   <>
    //     <TextField title='Counter: ' />
    //     <button onClick={(e: E) => dispatch({ type: 'INC' })}>+</button>
    //     <button onClick={(e: E) => dispatch({ type: 'DEC' })}>-</button>
    //     <button onClick={(e: E) => dispatch({ type: 'RESET' })}>*</button>
    //   </>
    // </Store.Provider>
    <div>loading...</div>
  )
}

export default CounterContainer
