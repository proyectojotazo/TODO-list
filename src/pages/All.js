import React from "react";

import Form from "./../components/Form";
import Todo from "./../components/Todo";

const All = ({ todos, setTodos }) => {
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <ul className="row todosList">
        {todos.length !== 0 ? (
          todos.map((todo) => (
            <Todo key={todo.id} {...todo} todos={todos} setTodos={setTodos} />
          ))
        ) : (
          <h3>No hay TODOS</h3>
        )}
      </ul>
    </>
  );
};

export default All;
