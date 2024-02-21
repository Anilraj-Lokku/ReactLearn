/*import React, { useState, useEffect } from "react";

function ButtonClickCounter() {
  const [count, setCount] = useState(0);

  console.log(" Clicked");

  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log("You Clicked");
  }, [count]); // Effect runs whenever count changes

  return (
    <div>
      <h1>Button Click Counter</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Clicked {count} times</p>
    </div>
  );
}

export default ButtonClickCounter;*/

/*import React, { useState, useEffect } from "react";

function ConfirmNavigationPrompt() {
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = ""; // Some browsers require a return value
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]); // Effect runs whenever isDirty changes

  const handleInputChange = () => {
    setIsDirty(true);
  };

  return (
    <div>
      <h1>Confirm Navigation Prompt</h1>
      <p>
        Type something in the input field and try to navigate away from the
        page.
      </p>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
}

export default ConfirmNavigationPrompt;*/

import React, { useState, useEffect } from "react";

function DataFetching() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup function (optional)
      // For example, cancelling any pending requests
    };
  }, []); // Empty dependency array means the effect runs only once after initial render

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetching;
