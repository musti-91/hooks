import React, { SFC, useState, useCallback, useEffect } from 'react'

interface iOwnProps {}

/**
 * @author
 * @function @Example
 **/

const Example: SFC<iOwnProps> = props => {
  const [id, setID] = useState(1)
  const [users, setUsers] = useState([])

  const fetchData = useCallback(
    async (key: number) => {
      let req = await fetch(`http://jsonplaceholder.typicode.com/users/${key}`)
      return req.json()
    },
    [id]
  ) // callback DEPS it's ok

  useEffect(() => {
    fetchData(1).then(setUsers)
  }, [fetchData]) // DEPS is ok

  useEffect(() => {
    fetchData(2).then(setUsers)
  }, [fetchData]) // DEPS is ok

  return <div>{users.length !== 0 && JSON.stringify(users)}</div>
}

export default Example
