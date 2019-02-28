import React, { SFC, useReducer, useEffect, createContext } from 'react'
import { reducer as userReducer, logger, createStore, INITIAL_STATE } from '@stores/index'
import fetchData from '@utils/fetchData'

interface iOwnProps {}

/**
 * @author
 * @function @UserContainer
 **/

const Store = createContext(INITIAL_STATE)

const UserContainer: SFC<iOwnProps> = props => {
  const store = createStore([logger])

  useEffect(() => {
    fetchData('users').then(users => {
      store.dispatch({ type: 'START_FETCHING' })
      store.dispatch({ type: 'FETCH_FULFILLED', users })
    })
  }, [])

  return (
    <Store.Provider value={store.state}>
      <div>
        {store.state.users.length === 0 && <p>Loading...</p>}
        {store.state.users.length !== 0 &&
          store.state.users.map((user: any) => <li key={user.id}>{user.name}</li>)}
      </div>
    </Store.Provider>
  )
}

export default UserContainer
