import React from "react";

const Button = (props) => (
  <button
    className={`${props.className} rounded-md text-white font-bold hover:opacity-70  transition-all p-4`}
  >
    {props.children}
  </button>
);

export default Button;
