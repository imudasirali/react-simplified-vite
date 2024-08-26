import { useState } from "react";
import "./style.css";
import TodoItem from "./TodoItem";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addNewTodo() {
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
      <div id="new-todo-form">
        <label htmlFor="todo-inout">New Todo</label>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          id="todo-input"
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
