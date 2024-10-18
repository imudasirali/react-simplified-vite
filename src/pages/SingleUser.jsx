import { useLoaderData } from "react-router-dom";
import { Post } from "../components/Post";
import { TodoItem } from "../components/TodoItem";

function SingleUser() {
  const { user, posts, todos } = useLoaderData();
  return (
    <>
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b>{" "}
        {`${user.address.street} ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
      </div>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

async function loader({ params, request: { signal } }) {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`,
    {
      signal,
    }
  ).then((res) => res.json());

  const posts = fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/posts`,
    {
      signal,
    }
  ).then((res) => res.json());

  const todos = fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/todos`,
    {
      signal,
    }
  ).then((res) => res.json());

  return { user: user, posts: await posts, todos: await todos };
}

export const SingleUserRoute = {
  loader,
  element: <SingleUser />,
};
