// import logo from './logo.svg';
// import "./App.css";

import { useReducer } from "react";
import "./styles.css";
import DigitButton from "./DigitButton";

export const ACTIONS = {
 ADD_DIGIT: "add-digit",
 CHOOSE_OPERATION: "choose-operation",
 DELETE_DIGIT: "delete-digit",
 EVALUATE: "evaluate",
 CLEAR: "clear",
};

function reducer(state, { type, payload }) {
 switch (type) {
  case ACTIONS.ADD_DIGIT:
   return {
    ...state,
    currentOperand: `${state.currentOperand || ""} ${payload.digit}`,
   };
 }
}

function App() {
 //In Calculator the portion consists of two section one is the first  operantion and another one is  the type of operand and 2nd operation is the Current Operation
 const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
  reducer,
  {}
 );
 //  function handleClick() {
 //   alert("1 number clicked");
 //  }
 return (
  <div className="calculator-grid">
   <div className="output">
    <div className="previous-operand">
     {previousOperand} {operation}
    </div>
    <div className="current-operand">{currentOperand}</div>
   </div>
   <button className="span-two">AC</button>
   <button>DEL</button>
   <DigitButton digit="÷" dispatch={dispatch} />
   {/* <button>÷</button> */}
   <button>1</button>
   <button>2</button>
   <button>3</button>
   <button>*</button>
   <button>4</button>
   <button>5</button>
   <button>6</button>
   <button>+</button>
   <button>7</button>
   <button>8</button>
   <button>9</button>
   <button>-</button>
   <button>.</button>
   <button>0</button>
   <button className="span-two">=</button>
  </div>
 );
}

export default App;
