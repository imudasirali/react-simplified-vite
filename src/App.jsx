import { useState } from "react";
import "./style.css";
import TodoItem from "./TodoItem";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [newText, setNewText] = useState("This is a text area");

  function addNewTodo(e) {
    e.preventDefault();
    if (newTodo == "") return;
    setTodoList((currentState) => {
      return [
        ...currentState,
        { name: newTodo, completed: false, id: crypto.randomUUID() },
      ];
    });
  }

  function toggleChecked(todoId, completed) {
    setTodoList((currentState) => {
      return currentState.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed };
        return todo;
      });
    });
  }

  function deleteTodo(todoId) {
    setTodoList((currentState) => {
      return currentState.filter((todo) => todo.id != todoId);
    });
  }

  function setSelectValue(e) {
    console.log(e.target.value);
  }
  return (
    <>
      <ul id="list">
        {todoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleChecked={toggleChecked}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
      <form onSubmit={addNewTodo} id="new-todo-form">
        <label htmlFor="todo-inout">New Todo</label>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          id="todo-input"
        />
        <button>Add Todo</button>
        <textarea
          onChange={(e) => setNewText(e.target.value)}
          value={newText}
        ></textarea>
        <select onChange={setSelectValue} defaultValue={3}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </form>
    </>
  );
}

export default App;
