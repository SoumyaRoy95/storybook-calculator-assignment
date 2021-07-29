import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ClearButton from "./components/ClearButton";
import Screen from "./components/Screen";
import * as math from "mathjs";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    if (e.target.name !== "÷") setValue(value + e.target.name);
    else if (e.target.name === "÷") setValue(value + "/");
  };

  const handleClear = (e) => {
    setValue("");
  };

  const handleResult = (e) => {
    const result = math.evaluate(value);
    setValue(result);
  };

  return (
    <div className="App">
      <div className="buttons">
        <Screen input={value}></Screen>
        <div className="row">
          <ClearButton onClick={handleClear} label="clear" />
          <Button
            name="÷"
            onClick={handleClick}
            variant="operational"
            label="÷"
          />
        </div>
        <div className="row">
          <Button
            name="7"
            onClick={handleClick}
            variant="numerical"
            label="7"
          />
          <Button
            name="8"
            onClick={handleClick}
            variant="numerical"
            label="8"
          />
          <Button
            name="9"
            onClick={handleClick}
            variant="numerical"
            label="9"
          />
          <Button
            name="-"
            onClick={handleClick}
            variant="operational"
            label="-"
          />
        </div>
        <div className="row">
          <Button
            name="4"
            onClick={handleClick}
            variant="numerical"
            label="4"
          />
          <Button
            name="5"
            onClick={handleClick}
            variant="numerical"
            label="5"
          />
          <Button
            name="6"
            onClick={handleClick}
            variant="numerical"
            label="6"
          />
          <Button
            name="+"
            onClick={handleClick}
            variant="operational"
            label="+"
          />
        </div>
        <div className="row">
          <Button
            name="1"
            onClick={handleClick}
            variant="numerical"
            label="1"
          />
          <Button
            name="2"
            onClick={handleClick}
            variant="numerical"
            label="2"
          />
          <Button
            name="3"
            onClick={handleClick}
            variant="numerical"
            label="3"
          />
          <Button onClick={handleResult} variant="operational" label="=" />
        </div>
      </div>
    </div>
  );
}

export default App;
