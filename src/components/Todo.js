import React from "react";

const Todo = ({ id, description, isCompleted, todos, setTodos }) => {
  const handleChange = (e) => {
    const todoCompleted = {
      id,
      description,
      isCompleted: e.target.checked,
    };
    const oldTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...oldTodos, todoCompleted]);
  };

  return (
    <div className="todo-wrapper u-full-width">
      <input
        className="one column todosList__checkBox"
        type="checkbox"
        id={id}
        onChange={handleChange}
        checked={isCompleted}
      />
      {isCompleted ? (
        <label className="todosList__label checked" htmlFor={id}>
          {description}
        </label>
      ) : (
        <label className="todosList__label" htmlFor={id}>
          {description}
        </label>
      )}
    </div>
  );
};

export default Todo;
