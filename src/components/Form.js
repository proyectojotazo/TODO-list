import React from "react";

const Form = () => {
  return (
    <form className="row form">
      <input
        className="ten columns form__inp-txt"
        type="text"
        placeholder="add details"
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
