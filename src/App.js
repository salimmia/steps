import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setState] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // alert("Previous");
    if (step > 1) setState((s) => s - 1);
  }

  function handleNext() {
    // alert("Next");
    if (step < 3) setState((s) => s + 1);
  }

  function handleIsOpen() {
    setIsOpen((s) => !s);
    // setIsOpen((s) => !s);
    // setState(1);
  }

  return (
    <>
      <button className="close" onClick={() => handleIsOpen(isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              // onMouseEnter={() => alert("enter")}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
              // onMouseEnter={() => alert("enter")}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
