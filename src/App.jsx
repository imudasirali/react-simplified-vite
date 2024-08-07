import React from "react";

function App() {
  // return React.createElement("h1", { id: "5" }, "Hello world");
  // return <h1>Hello World</h1>;
  return (
    <div className="large" id="largerDiv">
      <label htmlFor="inputId">label text</label>
      <input id="inputId" type="number" value={3}></input>
    </div>
  );
}

export default App;
