import { useState } from "react";

export default function Person() {
  const [name, setName] = useState("Mudasir Function");
  const [age, setAge] = useState(31);

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
      <p>
        My name is {name} and I am {age} years old.
      </p>
    </div>
  );
}
