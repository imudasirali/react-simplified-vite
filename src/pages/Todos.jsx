import { useLoaderData } from "react-router-dom";
import { TodoItem } from "../components/TodoItem";
import { contentLoader } from "../loaders";

function Todos() {
  const todos = useLoaderData();
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

const loader = contentLoader("todos");
export const TodosRoute = {
  loader,
  element: <Todos />,
};
