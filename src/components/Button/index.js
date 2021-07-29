import React from "react";
import "./index.css";

const Button = (props) => {
  const { variant = "primary", label, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {label}
    </button>
  );
};

export default Button;
