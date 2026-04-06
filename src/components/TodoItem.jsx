import React from 'react'

const TodoItem = ({todo, deleteTodo,toggleTodo}) => {
  return (

    <div className='flex items-center justify-between mb-2'>
        <span 
        onClick={()=>toggleTodo(todo.id)}
        className={todo.completed ? 'line-through' : ''}
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