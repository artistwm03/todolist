import React, { useState, Fragment } from 'react'
import InsertTodo from './InsertTodo'
import TodoItem from './TodoItem'

export interface TodoInterface {
  contents: string
  isCheck: boolean
}

const TodoList: React.FC = () => {
  const initialState: Array<TodoInterface> = [{
    contents: "hello world!",
    isCheck: false
  }]
  const [todos, setTodos] = useState(initialState)

  const handleCheck = (index: number) => {
    const newTodos = todos.slice()
    newTodos.splice(index, 1, {
      ...newTodos[index],
      isCheck: !newTodos[index].isCheck
    })
    setTodos(newTodos)
  }
  const handleInsertTodo = (contents: string) => {
    setTodos([{ contents: contents, isCheck: false }].concat(todos))
  }

  return (
    <Fragment>
      <h1>Todo List</h1>
      <InsertTodo handleInsertTodo={handleInsertTodo} />
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          index={index}
          handleCheck={handleCheck}
          key={index}
        />
      ))}
    </Fragment>
  )
}

export default TodoList