import React from 'react'
import TodoItem from "./TodoItem";
//import "./TodoList.css";

const TodoList = ({ todos, deleteTodo, toggleTodo, updateTodo }) => {
  return (
    <div className="w-full mt-4 border-t border-gray-700 pt-4">
      {todos.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        todos.map((todo) => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;