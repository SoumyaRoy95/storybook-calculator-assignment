import React from "react";
import "./index.css";

const Screen = (props) => {
  const { input, ...rest } = props;
  return (
    <div className="input" {...rest}>
      {input}
    </div>
  );
};

export default Screen;
