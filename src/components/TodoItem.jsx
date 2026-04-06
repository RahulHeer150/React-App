import React from 'react'

const TodoItem = ({todo, deleteTodo,toggleTodo}) => {
  return (

    <div>
        <span 
        onClick={()=>toggleTodo(todo.id)}
        className={todo.completed ? 'line-through' : ''}
        >
            {todo.text}
        </span>
        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>

    </div>
  )
}

export default TodoItem