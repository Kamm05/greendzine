import React from "react";
import "./Button.css";

const Button = ({ type }) => {
  return (
    <button type={type} className="btn flex items-center justify-center mt-10">
      Login
    </button>
  );
};

export default Button;
