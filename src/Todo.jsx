import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div className="flex text-lg">
      <label>
        <input
          type="checkbox"
          class="h-3 w-3 mr-2"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick}
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
