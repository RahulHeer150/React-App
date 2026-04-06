import React from 'react'
import { v4 as uuidv4 } from "uuid";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import useLocalStorage from "../hooks/useLocalStorage";

const Home = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);

  const addTodo = (text) => {
    const newTodo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
      <TodoInput
       addTodo={addTodo} 
       />
      <TodoList
        className="w-full mt-4 border-t border-gray-700 pt-4"
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
};

export default Home;