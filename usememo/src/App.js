import "./App.css";

//Memoization is essentially just caching. Imagine a complex function that is slow to run which takes a as an argument. In order to speed up this function, you can cache the results of running the function so that when the function is run with the same inputs you can use the cached value instead of recomputing the value. This would look something like this.
//import React, { useState, useMemo } from "react";

/*function ExpensiveCalculation({ number }) {
  // Calculate factorial of the number
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]); // Dependency: number

  return (
    <div>
      <p>
        Factorial of {number} is {factorial}
      </p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(5);

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveCalculation number={count} />
    </div>
  );
}

export default App;*/

//Without useMemo
/*import React, { useState } from "react";

function ExpensiveCalculation({ value }) {
  const calculateResult = (value) => {
    console.log("Calculating...");
    return value * 2;
  };

  const expensiveResult = calculateResult(value);

  return <div>Result: {expensiveResult}</div>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveCalculation value={count} />
    </div>
  );
}

export default App;*/

import React, { useState, useMemo } from "react";

function ExpensiveCalculation({ value }) {
  const expensiveResult = useMemo(() => {
    console.log("Calculating...");
    return value * 2;
  }, [value]);

  return <div>Result: {expensiveResult}</div>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveCalculation value={count} />
    </div>
  );
}

export default App;
