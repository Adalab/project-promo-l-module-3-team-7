import React, { useState } from "react";
import "../style/layout/_form.scss";

function Input(props) {
  const handleInputChange = (ev) => {
    props.handleInput(ev);
  };

  return (
    <>
      <label className="form__label" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={"form__input js-" + props.name + " js-input-text"}
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleInputChange}
        required
      />
    </>
  );
}
Input.defaultProps = { type: "text" };
export default Input;
