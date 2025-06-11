import { use, useState } from "react";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [open, setOpen] = useState(true);

    function toggleOpenStepContainer() {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    return (
        <>
            <button className="close-btn" onClick={toggleOpenStepContainer}>
                ✖
            </button>
            {open ? (
                <div className="step-container">
                    <StepNumbers />
                    <StepWriting />
                    <NavigationBtns />
                </div>
            ) : (
                ""
            )}
        </>
    );
}

function StepNumbers() {
    return (
        <div className="step-numbers">
            <button className="step-btns">1</button>
            <button className="step-btns">2</button>
            <button className="step-btns">3</button>
        </div>
    );
}

function StepWriting() {
    return (
        <div className="step-h2">
            <h2>Learn React</h2>
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
