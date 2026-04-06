import React, { useState } from 'react'
useState

const TodoItem = ({todo, deleteTodo,toggleTodo}) => {
  // const [isEditing, setIsEditing] = useState(false);
  // const [editText, setEditText] = useState(todo.text);

  // const handleSave = () => {
  //   updateTodo(todo.id, editText);
  //   setIsEditing(false);
  // };

  return (

    <div className='flex items-center justify-between mb-2'>
        <span 
        onClick={()=>toggleTodo(todo.id)}
        className={todo.completed ? 'text-green-500' : ''}
        >
            {todo.text}
        </span>
        <button 
        className='bg-red-500 px-3 py-1 rounded-lg text-white ml-4' 
         onClick={()=>deleteTodo(todo.id)}>Delete</button>

    </div>
  )
}

export default TodoItem