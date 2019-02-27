import React, { SFC, useState, useEffect } from 'react'
import iTodo from '@models/iTodo'
import AddTodo from '@components/AddTodo'
import ListItem from '@components/ListItem'
import { getRandomId } from '@utils/getRandomId'
import { log } from '@utils/log'

interface iOwnProps {
  name?: string
}
/**
 * @author
 * @function @TodoContainer
 **/

const TodoContainer: SFC<iOwnProps> = ({ name }) => {
  const [todos, setTodos] = useState<iTodo[]>([])
  const [user, setUser] = useState<any>({})
  const [fetchError, setFetchTodoError] = useState<any>(null)

  const addTodo = (title: string) => {
    let copyTodos: iTodo[] = [
      { id: getRandomId(5, true), title, completed: false, userId: 1 },
      ...todos
    ]
    setTodos(copyTodos)
  }

  const setTodoCheck = (id: string) => {
    const copyTodos: iTodo[] = [...todos]
    let index = copyTodos.findIndex((todo: iTodo) => todo.id === id)
    copyTodos[index].completed = !todos[index].completed
    setTodos(copyTodos)
    log(`checked Todo:${index + 1}`)
  }

  const removeTodo = (id: string) => {
    const copyTodos: iTodo[] = [...todos]
    let index = copyTodos.findIndex(todo => todo.id === id)
    copyTodos.splice(index, 1)
    setTodos(copyTodos)
    log(`removed index: ${index + 1}`)
  }

  const setUserId = (id: string) => {
    const copyTodos: iTodo[] = [...todos]
    let index = copyTodos.findIndex(todo => todo.id == id)
    let userId = copyTodos[index].userId
    let fetchUser = getFetchData(userId)
    fetchUser.then(user => setUser(user))
  }

  const getFetchData = async (id?: string | number) => {
    let req
    if (id) {
      req = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    } else {
      req = await fetch('http://localhost:3030/todos')
    }
    return req.json()
  }

  useEffect(() => {
    fetch('http://localhost:3030/todos')
      .then(req => req.json())
      .then(res => setTodos(res))
      .catch(error => setFetchTodoError(error))
  }, [])

  return (
    <div className='todo-container'>
      <h4>{name}</h4>
      <AddTodo onGetValue={addTodo} />
      {fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
      {user && <h2>{user.name}</h2>}
      <ul className='list'>
        {todos.length !== 0 && <h2>TODOS</h2>}
        {todos.length !== 0 &&
          todos.map((todo: iTodo) => (
            <ListItem
              item={todo}
              onDelete={removeTodo}
              onChecked={setTodoCheck}
              key={todo.id}
              onUserIdClick={setUserId}
            />
          ))}
      </ul>
    </div>
  )
}

export default TodoContainer
