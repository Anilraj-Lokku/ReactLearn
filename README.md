<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
</head>
<body>
  <header style="background-color: pink; padding: 20px;">
    <h5>Hi Myself Anilraj Lokku. This is my React learning website</h5>
    <p>In this, I have several example codes of using React Hooks</p>
  </header>

  <main>
    <section style="padding: 20px;">
      <h1>Types of React Hooks</h1>
      <h3>React Hooks:</h3>
      <span>React provides several built-in hooks that allow functional components to access React features such as state, lifecycle methods, context, and more. Here are some of the most commonly used React hooks:</span>
      <ul>
        <li style="margin-top: 10px;">
          <h3>useState:</h3>
          <p>This hook allows functional components to manage local state.</p>
        </li>
        <li style="margin-top: 10px;">
          <h3>useEffect:</h3>
          <p>It enables performing side effects in function components, such as data fetching, subscriptions, or manually changing the DOM.</p>
        </li>
        <li style="margin-top: 10px;">
          <h3>useMemo:</h3>
          <p>useMemo memoizes the result of a function so that it is only re-computed when one of its dependencies has changed. It's useful for optimizing performance by memoizing expensive computations.</p>
        </li>
        <li style="margin-top: 10px;">
          <h3>useCallback:</h3>
          <p>This hook returns a memoized callback function that only changes if one of the dependencies has changed. It's useful for optimizing performance by preventing unnecessary re-renders.</p>
        </li>
        <li style="margin-top: 10px;">
          <h3>useContext:</h3>
          <p>useContext hook allows functional components to consume context created by the React.createContext API.</p>
        </li>
        <li style="margin-top: 10px;">
          <h3>useReducer:</h3>
          <p>The useReducer Hook is similar to the useState Hook. It allows for custom state logic. If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.</p>
        </li>
      </ul>
    </section>
  </main>

  <footer style="background-color: #f0f0f0; padding: 20px;">
    <p>GitHub Readme File</p>
  </footer>
</body>
</html>
