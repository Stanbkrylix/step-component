import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-container">
        <StepNumbers />
        <StepWriting />
        <NavigationBtns />
      </div>
    </>
  );
}

function StepNumbers() {
  return (
    <div className="step-numbers">
      <button className="step-1">1</button>
      <button className="step-2">2</button>
      <button className="step-3">3</button>
    </div>
  );
}

function StepWriting() {
  return (
    <div className="step-p">
      <p>Learn React</p>
    </div>
  );
}

function NavigationBtns() {
  return (
    <div className="navigation-btns">
      <button className="prev-btn">Previous</button>
      <button className="next-btn">Next</button>
    </div>
  );
}

export default App;
