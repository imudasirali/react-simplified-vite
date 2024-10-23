import { Form, Link, useLoaderData, useNavigation } from "react-router-dom";
import { TodoItem } from "../components/TodoItem";
import { useEffect, useRef } from "react";

function Todos() {
  const {
    searchParams: { query },
    todos,
  } = useLoaderData();
  const searchRef = useRef();
  const { state } = useNavigation();

  useEffect(() => {
    searchRef.current.value = query;
  }, [query]);
  return (
    <>
      <h1 className="page-title">
        Todos
        <div className="title-btns">
          <Link className="btn btn-outline" to="/todos/new">
            New
          </Link>
        </div>
      </h1>
      <Form className="form mb-4">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Search</label>
            <input type="search" name="query" id="query" ref={searchRef} />
          </div>
          <button className="btn">
            {state === "loading" ? "Loading" : "Search"}
          </button>
        </div>
      </Form>
      <span>{todos.length} items</span>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

const loader = async function loader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get("query") || "";
  return {
    searchParams: { query },
    todos: await fetch(`http://127.0.0.1:3000/todos/?q=${query}`, {
      signal,
    }).then((res) => res.json()),
  };
};
export const TodosRoute = {
  loader,
  element: <Todos />,
};
