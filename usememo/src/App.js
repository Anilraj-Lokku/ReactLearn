import "./App.css";

//Memoization is essentially just caching.
//Imagine a complex function that is slow to run which takes a as an argument.
//In order to speed up this function, you can cache the results of running the function so that when the function is run with the same inputs you can use the cached value instead of recomputing the value. This would look something like this.

import React, { useState, useMemo } from "react";
function ExpensiveCalculation({ number }) {
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

export default App;

//Without useMemo
import React, { useState } from "react";
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
export default App;

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
export default App;*/

//More Examples Using useMEMO
import React, { useState, useMemo } from "react";
function FilteredList({ items, search }) {
  const filteredList = useMemo(() => {
    console.log("Filtering...");
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  return (
    <div>
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const items = ["Apple", "Banana", "Orange", "Pineapple"];

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FilteredList items={items} search={search} />
    </div>
  );
}
export default App;

import React, { useState, useMemo } from "react";
function RandomNumberList({ length }) {
  const randomNumbers = useMemo(() => {
    console.log("Generating random numbers...");
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
  }, [length]);

  return (
    <div>
      <ul>
        {randomNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [length, setLength] = useState(10);

  return (
    <div>
      <button onClick={() => setLength(length + 1)}>Increase Length</button>
      <RandomNumberList length={length} />
    </div>
  );
}
export default App;*/

//Use CallBack Examples
//Definition:useCallback is a React hook used for optimizing performance by memoizing functions.
//It returns a memoized callback function that only changes if one of the dependencies has changed.
//Examples

import React, { useState, useCallback } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  // Define a callback function that increments the count
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      // Pass the memoized callback function to the button's onClick handler 
      <button onClick={increment}>Increment</button>
    </div>
  );
}
export default Counter;

//Example 2: Memoization of a Function

import React, { useState, useCallback } from "react";

function ExpensiveComputation() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const computeResult = useCallback((value) => {
    // Simulate a computationally expensive operation
    let computedResult = value.split("").reverse().join("");
    return computedResult;
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    const computedResult = computeResult(input);
    setResult(computedResult);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>Compute Result</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
}
export default ExpensiveComputation;