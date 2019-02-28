import React, { SFC, useState, useEffect, Dispatch, SetStateAction } from 'react'
import _ from 'lodash'
// helpers
import { log } from '@utils/log'
import fetchData from '@utils/fetchData'
// models
import iTodo from '@models/iTodo'
import iUser from '@models/iUser'
// components
import AddTodo from '@components/AddTodo'
import ListItem from '@components/ListItem'
import { array } from 'prop-types'

interface iOwnProps {
  name?: string
}
/**
 * @author
 * @function @TodoContainer
 **/

const TodoContainer: SFC<iOwnProps> = ({ name }) => {
  const [todos, setTodos] = useState<iTodo[]>([])
  const [users, setUsers] = useFetchData<iUser[]>('users')

  const [user, setUser] = useState<any>({})
  const [fetchError, setFetchTodoError] = useState<any>(null)

  const addTodo = (title: string) => {
    let newTodo: iTodo = {
      id: (todos.length + 1).toString(),
      title,
      completed: false,
      userId: 1
    }
    let copyTodos: iTodo[] = [newTodo, ...todos]
    setTodos(copyTodos)
    log(`add Todo: ${newTodo.id}`)
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
    let fetchUser = fetchData('user', userId)
    fetchUser.then(user => {
      setUser(user)
      setUsers([...users, user])
    })
    console.log(users)
  }

  useEffect(() => {
    fetchData('todos')
      .then(todos => setTodos(_.shuffle(todos)))
      .catch(err => setFetchTodoError(err))
  }, [])

  return (
    <div className='todo-container'>
      <h2>{name}</h2>
      <AddTodo onGetValue={addTodo} />
      {fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
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
              user={user}
            />
          ))}
      </ul>
    </div>
  )
}

function useFetchData<S>(type: string): [S | any[], Dispatch<SetStateAction<S[]>>] {
  const [arr, setArr] = useState<S[]>([])

  useEffect(() => {
    fetchData(type).then(res => setArr(res))
  }, [])

  return [arr, setArr]
}

export default TodoContainer
