import React from "react";

const Todo = ({ id, description, isCompleted, todos, setTodos }) => {
  const handleChange = (e) => {
    const todoCompleted = {
      id,
      description,
      isCompleted: e.target.checked,
    };

    setTodos(todos.map((todo) => (todo.id !== id ? todo : todoCompleted)));
  };

  return (
    <>
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
    </>
  );
};

export default Todo;
