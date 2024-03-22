import "./App.css";
//Similar to useState, useReducer takes an initial state as one of its arguments
// and returns to us the current state and a way to update that state.
//useReducer also re-renders a component when the state changes just like
//useState. The only major difference is that we also need to pass a reducer f
//unction to useReducer which contains all the logic for modifying our state.

/*import React, { useReducer } from "react";
// Define a reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unsupported action type");
  }
};

function Counter() {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      // Dispatch actions to update state 
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;*/

//Cleaning Up Actions
//One of the biggest downsides to useReducer is that all the actions are defined
// in strings. This makes it easy to accidentally misspell the action type and
//cause a bug. One easy way to minimize these types of mistakes is to use a
//constant object to contain all available actions. This then gives you
//autocomplete on action types and if you are using TypeScript they can be
//checked by the compiler. Here is a simple example of that.

import React, { useReducer } from "react";
// Define a reducer function
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 };
    default:
      throw new Error("Unsupported action type");
  }
};

function Counter() {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      {/*Dispatch Reducer Update state */}
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
    </div>
  );
}

export default Counter;
