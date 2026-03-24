# Ex06 BMI Calculator
## Date: 24/3/2026

## AIM
To develop a responsive and interactive Body Mass Index (BMI) Calculator using React that allows users to input their height and weight, and calculates their BMI to categorize their health status (e.g., Underweight, Normal, Overweight, Obese).

## DESIGN STEPS

### STEP 1: Initialize React Project

<li>Create a new React app using create-react-app.</li>
<li>Install React Router using:</li>
npm install react-router-dom

### STEP 2: Set Up Routing

Create routing structure with react-router-dom:

<li>Home route (/) – Intro or Navigation</li>

<li>BMI Calculator route (/bmi)</li>

<li>Result route (/result)</li>

### STEP 3: Design the BMI Form Page

<li>Create a form to accept Height (in cm or m) and Weight (in kg).</li>

<li>On form submit, navigate to the result page with entered values via URL query params or context/state.</li>

## STEP 4: Handle Input Validation

<li>Check if height and weight are valid numbers.</li>

<li>Optionally, show error messages for invalid inputs.</li>

### STEP 5: Perform BMI Calculation

<li>In the result component:

<li>Extract height and weight from the route (URL or passed state).</li>

<li>Apply the BMI formula:</li>

![image](https://github.com/user-attachments/assets/ec785506-c96b-489e-8783-fb1a5d36101a)
​
 
<li>Convert height from cm to m if needed.</li></li>

### STEP 6: Display Result

<li>Show calculated BMI.</li>

<li>Show category based on BMI range:

<li>Underweight, Normal, Overweight, Obese, etc.</li></li>

### STEP 7: Navigation Options

<li>Provide a button to go back to the BMI form to calculate again.</li>

### STEP 8: Enhancements

<li>Add styling using CSS or Tailwind.</li>

## PROGRAM

```
## App.js

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
```
```
## App.css

body {
  margin: 0;
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Card Design */
.card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  width: 320px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

h1 {
  margin-bottom: 20px;
}

/* Inputs */
input {
  width: 90%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
}

/* Button */
button {
  width: 100%;
  padding: 12px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #5a67d8;
}

/* Result */
.result {
  margin-top: 20px;
}

.status {
  font-weight: bold;
}

/* Color Indicators */
.normal { color: green; }
.underweight { color: orange; }
.overweight { color: red; }
.obese { color: darkred; }

```
```
## index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```
## OUTPUT

![alt text](<Screenshot 2026-03-24 142304.png>)

## RESULT
The BMI Calculator successfully takes user input for height and weight, performs the BMI calculation in real-time using React state and event handling, and displays the BMI value along with the corresponding health category.
