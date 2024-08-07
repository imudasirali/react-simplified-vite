import TodoList from "./TodoList";
import Heading from "./Heading";
// import { TodoListClass } from "./TodoListClass";
// import { HeadingClass } from "./HeadingClass";
import TodoListItem from "./TodoListItem";
import TodoListItemClass from "./TodoListItemClass";

function App() {
  return (
    <div>
      {/* <Heading /> */}
      <Heading name="Mudasir Ali" age={31} />
      <Heading name="John Doe" age={38} />
      <TodoList />
      <TodoListItem isComplete>Check the milk</TodoListItem>
      <TodoListItemClass isComplete> Buy some grocery</TodoListItemClass>
      {/* <TodoListClass /> */}
    </div>
  );
}

export default App;
