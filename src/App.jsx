import { use, useState } from "react";

import "./App.css";

function App() {
    const [open, setOpen] = useState(true);
    const [currentStep, setCurrentStep] = useState(0);
    const [stepArray, setStepArray] = useState([
        { id: 1, stepDescription: "Step 1: Learn React " },
        { id: 2, stepDescription: "Step 2: Apply for jobs 💼" },
        { id: 3, stepDescription: "Step 3: Invest your new income 🤑" },
    ]);

    function toggleOpenStepContainer() {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    function onClickNextBtn() {
        if (currentStep >= stepArray.length - 1) return;
        setCurrentStep(currentStep + 1);
    }

    function onClickPrevBtn() {
        if (currentStep === 0) return;
        setCurrentStep(currentStep - 1);
    }

    return (
        <>
            <button className="close-btn" onClick={toggleOpenStepContainer}>
                ✖
            </button>
            {open ? (
                <div className="step-container">
                    <StepNumbers
                        stepArray={stepArray}
                        currentStep={currentStep}
                    />
                    <StepWriting
                        stepArray={stepArray}
                        currentStep={currentStep}
                    />
                    <NavigationBtns
                        stepArray={stepArray}
                        onClickNextBtn={onClickNextBtn}
                        onClickPrevBtn={onClickPrevBtn}
                    />
                </div>
            ) : (
                ""
            )}
        </>
    );
}

function StepNumbers({ stepArray, currentStep }) {
    return (
        <div className="step-numbers">
            {stepArray.map((step, index) => {
                return (
                    <button
                        key={step.id}
                        className={`step-btns ${
                            currentStep >= index ? "current-step" : ""
                        }`}
                    >
                        {step.id}
                    </button>
                );
            })}
        </div>
    );
}

function StepWriting({ stepArray, currentStep }) {
    return (
        <div className="step-h2">
            <h2>{stepArray[currentStep].stepDescription}</h2>
        </div>
    );
}

function NavigationBtns({ stepArray, onClickNextBtn, onClickPrevBtn }) {
    return (
        <div className="navigation-btns">
            <button className="prev-btn" onClick={onClickPrevBtn}>
                Previous
            </button>
            <button className="next-btn" onClick={onClickNextBtn}>
                Next
            </button>
        </div>
    );
}

export default App;
