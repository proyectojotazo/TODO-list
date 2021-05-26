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
            <div key={`${todo.id}All`} className="start todo-wrapper">
              <Todo  {...todo} todos={todos} setTodos={setTodos} />
            </div>
            
          ))
        ) : (
          <h3 className="title">There are no TODOS. Create your own!</h3>
        )}
      </ul>
    </>
  );
};

export default All;
