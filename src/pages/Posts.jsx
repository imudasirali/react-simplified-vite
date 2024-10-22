import { Form, Link, useLoaderData, useNavigation } from "react-router-dom";
import { Post } from "../components/Post";
import { useEffect, useRef } from "react";

function Posts() {
  const {
    posts,
    users,
    searchParams: { query, userId },
  } = useLoaderData();
  const queryRef = useRef();
  const userRef = useRef();
  useEffect(() => {
    queryRef.current.value = query || "";
  }, [query]);
  useEffect(() => {
    userRef.current.value = userId || "";
  }, [userId]);
  const { state } = useNavigation();
  const isSubmitting = state === "submitting" || state === "loading";
  return (
    <>
      <h1 className="page-title">
        Posts{" "}
        <div className="title-btns">
          <Link className="btn btn-outline" to="/posts/new">
            New
          </Link>
        </div>
      </h1>
      <Form method="get" className="form mb-4">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Query</label>
            <input type="search" name="query" id="query" ref={queryRef} />
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select type="search" name="userId" id="userId" ref={userRef}>
              <option value="">Any</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <button disabled={isSubmitting} className="btn">
            {isSubmitting ? "Loading" : "Filter"}
          </button>
        </div>
      </Form>
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
    </>
  );
}

async function loader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get("query") || "";
  const userId = searchParams.get("userId") || "";
  let postsApi = `http://127.0.0.1:3000/posts/?q=${query}`;
  if (userId !== "") {
    postsApi = `http://127.0.0.1:3000/posts/?q=${query}&userId=${userId}`;
  }
  const posts = await fetch(postsApi, {
    signal,
  }).then((res) => res.json());

  const users = fetch("http://127.0.0.1:3000/users/", {
    signal,
  }).then((res) => res.json());

  return { posts, users: await users, searchParams: { query, userId } };
}

export const PostsRoute = {
  loader,
  element: <Posts />,
};
