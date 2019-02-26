import React, { SFC, useState } from 'react'
import AddTodo from '@components/AddTodo'
import ListItem from '@components/ListItem'

interface iOwnProps {
  name?: string
}

interface ITodo {
  subject: string
  complete: boolean
}
/**
 * @author
 * @function @TodoContainer
 **/

const TodoContainer: SFC<iOwnProps> = ({ name }) => {
  const [todos, setTodo] = useState<ITodo[]>([{ subject: 'initial_todo', complete: true }])

  const setList = (subject: string) => {
    let copyTodos: ITodo[] = [...todos, { subject, complete: false }]
    setTodo(copyTodos)
  }

  const setTodoCheck = (i: number) => {
    const copyTodos: ITodo[] = [...todos]
    todos[i].complete = !copyTodos[i].complete
    setTodo(copyTodos)
  }

  const removeTodo = (i: number) => {
    const copyTodos: ITodo[] = [...todos]
    copyTodos.splice(i, 1)
    setTodo(copyTodos)
  }

  return (
    <div>
      <h4>{name}</h4>
      <AddTodo onGetValue={setList} />
      <div>
        <ul className='list'>
          {todos.length !== 0 && <h2>TODOS</h2>}
          {todos.length !== 0 &&
            todos.map((todo: ITodo, index: number) => (
              <ListItem
                item={todo}
                indexItem={index}
                onDelete={removeTodo}
                onChecked={setTodoCheck}
              />
            ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoContainer
