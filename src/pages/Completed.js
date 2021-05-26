import React from "react";
import Todo from "../components/Todo";

const Completed = ({ todos, setTodos }) => {
  let completedTodos = todos.filter((todo) => todo.isCompleted === true);

  const handleClick = (e) => {
    let todoToDelete = todos.filter((todo) => todo.id === e.target.name)[0]
      .description;
    todoToDelete =
      todoToDelete.length > 15
        ? `${todoToDelete.slice(0, 15)}...`
        : todoToDelete;

    let todosUpdated = todos.filter((todo) => todo.id !== e.target.name);
    const delTodo = window.confirm(
      `You want to delete this TODO?\n-${todoToDelete}-`
    );
    if (delTodo) {
      setTodos(todosUpdated);
      alert("Deleted succesfully!");
    } else alert("Delete cancelled!");
  };

  const deleteAll = (e) => {
    const deleteAll = window.confirm("You want to delete ALL COMPLETED TODOS?");
    const updatedList = todos.filter((todo) => todo.isCompleted === false);
    if (deleteAll) setTodos(updatedList);
    else alert("Delete all cancelled!");
  };

  return (
    <ul className="row todosList completed">
      {completedTodos.length !== 0 ? (
        <>
          {completedTodos.map((todo) => (
            <div key={todo.id} className="todo-wrapper u-full-width">
              <Todo {...todo} todos={todos} setTodos={setTodos} />
              <button
                name={todo.id}
                onClick={handleClick}
                className="button-primary"
                id="todoList__btn-delete"
              >
                Delete
              </button>
            </div>
          ))}
          <button className="todoList__btn-deleteAll" onClick={deleteAll}>
            Delete All
          </button>
        </>
      ) : (
        <h3 className="title">No hay TODOS completados</h3>
      )}
    </ul>
  );
};

export default Completed;
