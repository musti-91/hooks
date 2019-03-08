import React, { SFC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { createStore, ActionTypes } from '@stores/index'
import fetchData from '@utils/fetchData'

import { default as UserList } from '@components/UsersList'
interface iOwnProps {}

/**
 * @author
 * @function @UserContainer
 **/
const UserContainer: SFC<iOwnProps> = props => {
  const { Store, state, dispatch } = createStore()
  useEffect(() => {
    fetchData('users')
      .then(users => dispatch({ type: ActionTypes.FETCHING_FULFILLED, payload: users }))
      .catch(error => dispatch({ type: ActionTypes.FETCHING_ERROR, payload: error }))
  }, [])

  return (
    <Store.Provider value={{ state, dispatch }}>
      <Link to='/' className='link'>
        back
      </Link>
      <Store.Consumer>{({ state, dispatch }) => <UserList state={state} dispatch={dispatch} />}</Store.Consumer>
    </Store.Provider>
  )
}

export default UserContainer
