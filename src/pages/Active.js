import React from "react";
import Todo from "../components/Todo";
import Form from "../components/Form";

const Active = ({ todos, setTodos }) => {
  let activeTodos = todos.filter((todo) => todo.isCompleted === false);

  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <ul className="row todosList">
        {activeTodos.length !== 0 ? (
          activeTodos.map((todo) => (
            <div key={todo.id} className="start todo-wrapper">
              <Todo {...todo} todos={todos} setTodos={setTodos} />
            </div>
          ))
        ) : (
          <h3 className="title">No hay TODOS activos</h3>
        )}
      </ul>
    </>
  );
};

export default Active;
