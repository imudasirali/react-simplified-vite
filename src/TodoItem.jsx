import { useContext, useRef, useState } from "react";
import { TodoContext } from "./App";

export function TodoItem({ id, name, completed }) {
  const { toggleTodo, deleteTodo, updateTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const nameRef = useRef();
  function handleSave() {
    if (nameRef.current.value === "") return;
    updateTodo(id, nameRef.current.value);
    setIsEditing(false);
  }
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input
          checked={completed}
          type="checkbox"
          data-list-item-checkbox
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {isEditing ? (
          <input autoFocus type="text" defaultValue={name} ref={nameRef} />
        ) : (
          <span data-list-item-text>{name}</span>
        )}
      </label>
      {isEditing ? (
        <button onClick={handleSave} data-button-edit>
          {"Save"}
        </button>
      ) : (
        <button onClick={() => setIsEditing(!isEditing)} data-button-edit>
          {"Edit"}
        </button>
      )}

      <button onClick={() => deleteTodo(id)} data-button-delete>
        Delete
      </button>
    </li>
  );
}
