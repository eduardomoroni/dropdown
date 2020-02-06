import React from "react";
import "./Button.css";

export function Button(props) {
  return (
    <button disabled={props.disabled} onClick={props.onClick}>
      {props.text || props.children}
    </button>
  );
}
