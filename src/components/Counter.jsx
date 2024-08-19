import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0)
    function handleClick() {
        setCounter(currentCounter => currentCounter + 1)
    }
    return (
        <div onClick={handleClick}>
            counter: {counter}
        </div>
    )
} 