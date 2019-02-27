import React, { SFC, useState } from 'react'
import AddTodo from '@components/AddTodo'
import ListItem from '@components/ListItem'
import { getRandomId } from '@utils/getRandomId'

interface iOwnProps {
  name?: string
}

interface ITodo {
  id: string
  subject: string
  complete: boolean
}
/**
 * @author
 * @function @TodoContainer
 **/

const TodoContainer: SFC<iOwnProps> = ({ name }) => {
  const [todos, setTodo] = useState<ITodo[]>([
    { id: getRandomId(4, true), subject: 'initial_todo', complete: true }
  ])

  const setList = (subject: string) => {
    let copyTodos: ITodo[] = [...todos, { id: getRandomId(5, true), subject, complete: false }]
    setTodo(copyTodos)
  }

  const setTodoCheck = (id: string) => {
    const copyTodos: ITodo[] = [...todos]
    let index = copyTodos.findIndex((todo: ITodo) => todo.id === id)
    copyTodos[index].complete = !todos[index].complete
    setTodo(copyTodos)
    console.log(
      `%cchecked Todo: (${todos[index].id})`,
      'color:green;background-color:lightblue;padding:10px;border-radius:10px'
    )
  }

  const removeTodo = (id: string) => {
    const copyTodos: ITodo[] = [...todos]
    let index = copyTodos.findIndex(todo => todo.id === id)
    copyTodos.splice(index, 1)
    setTodo(copyTodos)
    console.log(
      `%cremoved index: ${index}`,
      'color:red;background-color:lightblue;padding:10px;border-radius:10px'
    )
  }

  return (
    <div className='todo-container'>
      <h4>{name}</h4>
      <AddTodo onGetValue={setList} />
      <ul className='list'>
        {todos.length !== 0 && <h2>TODOS</h2>}
        {todos.length !== 0 &&
          todos.map((todo: ITodo, index: number) => (
            <ListItem item={todo} onDelete={removeTodo} onChecked={setTodoCheck} key={todo.id} />
          ))}
      </ul>
    </div>
  )
}

export default TodoContainer
