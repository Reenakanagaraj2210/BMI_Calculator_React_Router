import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    const h = height / 100;
    const result = (weight / (h * h)).toFixed(2);

    setBmi(result);

    if (result < 18.5) setStatus("underweight");
    else if (result < 24.9) setStatus("normal");
    else if (result < 29.9) setStatus("overweight");
    else setStatus("obese");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>💪 BMI Calculator</h1>

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <button onClick={calculateBMI}>Calculate BMI</button>

        {bmi && (
          <div className="result">
            <h2>BMI: {bmi}</h2>
            <h3 className={`status ${status}`}>
              {status.toUpperCase()}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;