import React from "react";
import Todo from "../components/Todo";

const Completed = ({ todos, setTodos }) => {
  let completedTodos = todos.filter((todo) => todo.isCompleted === true);

  return (
    <ul className="row todosList completed">
      {completedTodos.length !== 0 ? (
        completedTodos.map((todo) => (
          <Todo key={todo.id} {...todo} todos={todos} setTodos={setTodos} />
        ))
      ) : (
        <h3>No hay TODOS completados</h3>
      )}
    </ul>
  );
};

export default Completed;
