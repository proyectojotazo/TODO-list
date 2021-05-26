import Form from "./components/Form";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container main-content">
      <div className="row">
        <h1 className="title u-full-width">#todo</h1>
      </div>
      <NavBar />
      <Form />
    </div>
  );
}

export default App;
