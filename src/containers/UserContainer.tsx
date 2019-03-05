import React, { SFC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { createStore, ActionTypes } from '@stores/index'
import fetchData from '@utils/fetchData'

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
      <Store.Consumer>{({ state, dispatch }) => <List state={state} dispatch={dispatch} />}</Store.Consumer>
    </Store.Provider>
  )
}

interface iProps {
  state: any
  dispatch: any
}
const List = ({ state, dispatch }: iProps) => {
  return (
    <div>
      <h3>{JSON.stringify(state.fetching)}</h3>
      <button onClick={() => dispatch({ type: ActionTypes.FETCHING })}>*</button>
      <div>
        {state.users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
    </div>
  )
}
export default UserContainer
