import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {
    const [text,setText] = useState('')

    const handleSubmit=()=>{
        if(!text.trim()) return
        addTodo(text)
        setText('')
    }
  return (
    <div className='flex '>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className='w-full border-1 border-gray-400 rounded-lg px-3 py-2 text-black'
      />
      <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white  px-4 rounded-lg ml-2'>
        Add Todo
      </button>
    </div>
  )
}

export default TodoInput