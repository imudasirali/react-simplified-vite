import { useState, useRef, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef("");
  useEffect(() => {
    console.log("rendered");
  }, [name]);

  function generateValue() {
    inputRef.current = Math.random();
    console.log(inputRef.current);
    // setName((currentName) => inputRef.current);
  }

  return (
    <>
      <label>
        Name:
        <input
          value={inputRef.current}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button onClick={generateValue}>Generate Value</button>
    </>
  );
}

export default App;
