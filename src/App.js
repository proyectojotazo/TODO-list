import { useState } from "react";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import Todo from "./components/Todo";


function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="container main-content">
      <div className="row">
        <h1 className="title u-full-width">#todo</h1>
      </div>
      <NavBar />
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
    </div>
  );
}

export default App;
