import { useEffect, useState, useReducer } from "react";

const initalState = 0;
const reducer = (state: any, action: any) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initalState;
    default:
      return state;
  }
};

function TestComponent() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [count, dispatch] = useReducer(reducer, initalState);

  const logMousePosition = (e: any) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mouseover", logMousePosition);
  }, []);

  return (
    <div>
      <h1>
        Hooks X - {x} Y -{y}
      </h1>
      <h1>Count-{count}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}
export default TestComponent;
