import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [input, setInput] = useState("");

  const ButtonClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
      <header>
        <div className="outerPortion">
          <div className="innerPortion">
            <input type="text" className="inputField" value={input} readOnly />

            <div className="buttonSection">
              <button className="operator" id="ac" onClick={() => ButtonClick("AC")}>AC</button>
              <button className="operator" onClick={() => ButtonClick("DEL")}>DEL</button>
              <button className="operator" onClick={() => ButtonClick("%")}>%</button>
              <button className="operator" onClick={() => ButtonClick("/")}>/</button>
              
              <button onClick={() => ButtonClick("7")}>7</button>
              <button onClick={() => ButtonClick("8")}>8</button>
              <button onClick={() => ButtonClick("9")}>9</button>
              <button className="operator" onClick={() => ButtonClick("*")}>*</button>
              
              <button onClick={() => ButtonClick("4")}>4</button>
              <button onClick={() => ButtonClick("5")}>5</button>
              <button onClick={() => ButtonClick("6")}>6</button>
              <button className="operator" onClick={() => ButtonClick("-")}>-</button>
              
              <button onClick={() => ButtonClick("1")}>1</button>
              <button onClick={() => ButtonClick("2")}>2</button>
              <button onClick={() => ButtonClick("3")}>3</button>
              <button className="operator" onClick={() => ButtonClick("+")}>+</button>
              
              <button onClick={() => ButtonClick("00")}>00</button>
              <button onClick={() => ButtonClick("0")}>0</button>
              <button onClick={() => ButtonClick(".")}>.</button>
              <button className="operator" onClick={() => ButtonClick("=")}>=</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default App;
