import React, { useState } from 'react'

interface Props {
  handleInsertTodo: (contents: string) => void
}

const InsertTodo: React.FC<Props> = (props) => {
  const [value, setValue] = useState("")

  //event 타입을 아는 방법은 input의 주석 확인
  const handleOnsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.handleInsertTodo(value)
    setValue("")
  }

  return (
    <form onSubmit={handleOnsubmit}>
      <input value={value}
        // 여기 event에 마우스를 올려 보면 타입을 알 수 있다.
        onChange={(event) => setValue(event.target.value)}
        placeholder="입력해주세요." />
    </form>
  )
}

export default InsertTodo