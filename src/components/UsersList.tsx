import React, { useContext } from 'react'
import { ActionTypes } from '@stores/index'

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
export default List
