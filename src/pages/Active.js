import React from "react";
import Todo from "../components/Todo";
import Form from "../components/Form";

const Active = ({ todos, setTodos }) => {

    let activeTodos = todos.filter((todo) => todo.isCompleted === false)

  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <ul className="row todosList">
        {activeTodos.length !== 0 ? (
          activeTodos
            .map((todo) => (
              <Todo key={todo.id} {...todo} todos={todos} setTodos={setTodos} />
            ))
        ) : (
          <h3>No hay TODOS activos</h3>
        )}
      </ul>
    </>
  );
};

export default Active;
