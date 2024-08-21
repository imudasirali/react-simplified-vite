import { useState } from "react"
import { ChildClass } from "./ChildClass"

export default function App() {
  const [show, setShow] = useState(true)

  const childComponent = show ? <ChildClass /> : null

  return (
    <div>
      <button onClick={() => setShow(currentShow => !currentShow)}>
        Show/Hide
      </button>
      {childComponent}
    </div>
  )
}