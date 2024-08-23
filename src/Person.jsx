import { useState, useEffect } from "react";
import { DisplayString } from "./DisplayString";

export default function Person({
  myname = "Nobody Doe",
  myage = 0,
  favouriteNumber,
}) {
  const [name, setName] = useState(myname);
  const [age, setAge] = useState(myage);
  useEffect(() => {
    document.title = name;
  }, [name]);

  function handleChange(e) {
    setName(e.target.value);
  }

  function increaseAge() {
    setAge((currentAge) => currentAge + 1);
  }

  function decreaseAge() {
    setAge((currentAge) => currentAge - 1);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <br />
      <br />
      <button onClick={decreaseAge}>-</button>
      <span> {age} </span>
      <button onClick={increaseAge}>+</button>
      <br />
      <br />
      {favouriteNumber != null && `My favourite number is ${favouriteNumber}`}
      <DisplayString name={name} age={age} />
    </div>
  );
}
