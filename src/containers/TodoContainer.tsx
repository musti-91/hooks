import React, { SFC, useState, useEffect } from 'react'
import _ from 'lodash'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
// helpers
import { log } from '@utils/log'
import fetchData from '@utils/fetchData'
// models
import iTodo from '@models/iTodo'
import iUser from '@models/iUser'
// components
import Form from '@components/fields/Form'
import List from '@components/List'
import { getNotified } from '@utils/notifications'

interface iOwnProps {
  name?: string | ''
}
/**
 * @author
 * @function @TodoContainer
 **/

const TodoContainer: SFC<iOwnProps> = ({ name }) => {
  const [user, setUser] = useState<any>({})
  // custom hooks
  const { todos, setTodos, fetchError } = useFetchData<iTodo[]>('todos')
  const { users, setUsers } = useFetchData<iUser[]>('users')
  const completedTodos = useCounter<number>(todos)

  // Add
  const addTodo = (title: string) => {
    let newTodo: iTodo = {
      id: (todos.length + 1).toString(),
      title,
      completed: false,
      userId: Math.floor(Math.random() * users.length)
    }

    let copyTodos = [newTodo, ...todos]
    setTodos(copyTodos)
    toast.success('new todos has been added!')
    log(`add Todo: ${newTodo.id}`)
  }
  // Check
  const setTodoCheck = (id: string) => {
    const copyTodos = [...todos]
    let index = copyTodos.findIndex((todo: iTodo) => todo.id === id)
    copyTodos[index].completed = !todos[index].completed
    setTodos(copyTodos)
    log(`checked Todo:${index + 1}`)
  }
  // Remove
  const removeTodo = (id: string) => {
    const copyTodos = [...todos]
    let index = copyTodos.findIndex(todo => todo.id === id)
    copyTodos.splice(index, 1)
    setTodos(copyTodos)
    log(`removed index: ${index + 1}`)
  }
  // getUserId
  const setUserId = (id: string) => {
    const copyTodos = [...todos]
    let index = copyTodos.findIndex(todo => todo.id == id)
    let userId = copyTodos[index].userId
    let fetchUser = fetchData('user', userId)
    fetchUser.then(user => {
      setUser(user)
      setUsers(users)
      getNotified('new user added: ' + user.name)
    })
  }

  const renderHeader = () => {
    return (
      <div>
        {todos.length !== 0 && <h2>Total: {todos.length}</h2>}
        {todos.length !== 0 && <h2>completed: {completedTodos}</h2>}
        {todos.length !== 0 && <h2>uncompleted: {todos.length - completedTodos}</h2>}
      </div>
    )
  }
  return (
    <div className='todo-container'>
      <Link to='/' className='link'>
        back
      </Link>
      <h2>{name}</h2>
      <Form onGetValue={addTodo} />
      {fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
      <ul className='list'>
        {renderHeader()}
        <List
          list={todos}
          onChecked={setTodoCheck}
          onDelete={removeTodo}
          onUserIdClick={setUserId}
          more={{ user }}
        />
      </ul>
      <ToastContainer autoClose={1800} />
    </div>
  )
}

/**
 * @type custom hooks
 * @param type string
 * @return type object {[], setArray()}
 * ❗️return an empty array for useEffectfunction will have bas consequences,reason: https://bit.ly/2EOEwk8
 */
function useFetchData<S>(type: string) {
  const [arr, setArr] = useState<any[]>([])
  const [fetchError, setFetchTodoError] = useState(null)

  useEffect(() => {
    fetchData(type)
      .then(res => setArr(res))
      .catch(error => setFetchTodoError(error))
  }, [])

  switch (type) {
    case 'users':
      return { users: arr, setUsers: setArr, fetchError }
    case 'todos':
      return { todos: arr, setTodos: setArr, fetchError }
    default:
      return { arr, setArr, fetchError }
  }
}
/**
 *
 * @param Array
 */
function useCounter<N>(array: any[]): number {
  const [completedTodos, setCompletedTodos] = useState(0)
  useEffect(() => {
    let i: number = 0
    array.map(item => (item.completed ? i++ : 0))
    setCompletedTodos(i)
  })
  return completedTodos
}
export default TodoContainer
