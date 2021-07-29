import React from "react";
import "./index.css";

const ClearButton = (props) => {
  const { label, ...rest } = props;
  return (
    <button className="clearbutton" {...rest}>
      {label}
    </button>
  );
};

export default ClearButton;
