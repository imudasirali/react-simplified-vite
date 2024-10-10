import { useReducer } from "react";
function reducer(count, action) {
  switch (action.type) {
    case "Decrease":
      return count - 1;
    case "Increase":
      return count + 1;
    case "Reset":
      return 0;
    case "Increase by 5":
      return count + 5;
    case "Decrease by 5":
      return count - 5;
    default:
      return count;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <button onClick={() => dispatch({ type: "Decrease" })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: "Increase" })}>+</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "Decrease by 5" })}>-5</button>
      <button onClick={() => dispatch({ type: "Increase by 5" })}>+5</button>
    </>
  );
}
