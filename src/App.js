import './App.css';
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently
        <span data-test="count">{count}</span>
      </h1>
      {count < 0 && (
        <h2 data-test="count-error">
          The counter cannot go below 0
        </h2>
      )}
      <button
        data-test="increment-button"
        onClick={() => setCount(count + 1)}
      >
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => setCount(count - 1)}
      >
        Decrement counter
      </button>
    </div>
  );
}

export default App;
