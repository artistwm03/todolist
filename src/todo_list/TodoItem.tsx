import React from 'react'
import { TodoInterface } from './TodoList'

interface Props {
  todo: TodoInterface
  handleCheck: (index: number) => void
  index: number
}

const TodoItem: React.FC<Props> = (props) => {
  const { handleCheck, todo, index } = props
  const { contents, isCheck } = todo

  return (
    <div onClick={() => handleCheck(index)}>
      {isCheck ?
        (<span role="img" aria-label="체크">✅</span>) :
        (<span role="img" aria-label="동그라미">🔘</span>)
      }
      <span> {contents} </span>
    </div >
  )
}

export default TodoItem