import React from "react";

function PreventDefaultExample() {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default behavior of the click event
    alert("Button clicked!"); // Custom logic - in this case, showing an alert
  };

  return (
    <div>
      <h1>Prevent Default Example</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default PreventDefaultExample;
