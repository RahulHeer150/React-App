import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No tasks yet 🚀</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;