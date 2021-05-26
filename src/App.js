import { useState } from "react";
import NavBar from "./components/NavBar";

import Active from "./pages/Active";
import All from "./pages/All";
import Completed from "./pages/Completed";

function App() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState("All");

  return (
    <div className="container main-content">
      <div className="row">
        <h1 className="title u-full-width">#todo</h1>
      </div>
      <NavBar setPage={setPage} />
      {page === "All" ? (
        <All todos={todos} setTodos={setTodos} />
      ) : page === "Active" ? (
        <Active todos={todos} setTodos={setTodos} />
      ) : (
        <Completed todos={todos} setTodos={setTodos} />
      )}
    </div>
  );
}

export default App;
