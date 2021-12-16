import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [inputNum, setInputNum] = useState(0);
  const [fromQTY, setFromQTY] = useState(1);
  const [toQTY, setToQTY] = useState(1);
  const [result, setResult] = useState(0);

  const handleFromInput = (e) => {
    setFromQTY(e.target.value)
  }
  const handleToInput = (e) => {
    setToQTY(e.target.value)
  }
  const handleNumInput = (e) => {
    setInputNum(e.target.value)
  }
  const handleConversion = (inputNum,fromQTY,toQTY) => {
    setResult(inputNum * fromQTY / toQTY)
  
  }
  return (
    <>
      <div className="converter-form">
        <Input label="Amount" onChange={handleNumInput}/>

        <div className="row">
          <Select label="From" items={units} onChange={handleFromInput}/>
          <Select label="To" items={units} onChange={handleToInput}/>

          <button onClick={() => handleConversion(inputNum,fromQTY,toQTY)}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
