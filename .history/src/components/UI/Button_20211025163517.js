import React from "react";
import "./Button.css";

export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="button"
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};
