import React, { useState } from "react";
import uuid from "uuid/v4";

const Form = ({ todos, setTodos }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const addTodo = {
      id: uuid(),
      description: text,
      isCompleted: false,
    };
    setTodos([...todos, addTodo]);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="row form" onSubmit={handleSubmit}>
      <input
        className="ten columns form__inp-txt"
        type="text"
        placeholder="add details"
        onChange={handleChange}
        value={text}
      />
      <input
        className="button-primary two columns form__inp-btn"
        type="submit"
        value="Add"
      />
    </form>
  );
};

export default Form;
