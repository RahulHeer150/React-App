import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {
    const [text,setText] = useState('')

    const handleSubmit=()=>{
        if(!text.trim()) return
        addTodo(text)
        setText('')
    }
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  )
}

export default TodoInput