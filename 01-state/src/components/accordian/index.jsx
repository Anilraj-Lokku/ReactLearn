import { useState } from "react"; // Importing useState hook from React library
import data from "./data"; // Importing data from an external file
import "./styles.css"; // Importing styles for the component

export default function Accordian() {
  const [selected, setSelected] = useState(null); // State variable to track selected item ID in single selection mode
  const [enableMultiSelection, setEnableMultiSelection] = useState(false); // State variable to track whether multi-selection mode is enabled
  const [multiple, setMultiple] = useState([]); // State variable to store selected item IDs in multi-selection mode

  // Function to handle selection in single selection mode
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // Function to handle selection in multi-selection mode
  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    // If the clicked item is not already selected, add its ID to the array, otherwise remove it
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple); // Update the multiple state variable with the new array of selected item IDs
  }

  console.log(selected, multiple); // Log the selected item ID(s) to the console for debugging

  return (
    <div className="acc-wrapper">
      {/* Button to toggle multi-selection mode */}
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>

      <div className="accordian">
        {/* Mapping over the data array to render each accordion item */}
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              {/* Clickable title of the accordion item */}
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              {/* Render the answer content based on the selection mode */}
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
