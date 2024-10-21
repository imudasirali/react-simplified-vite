import { Link, useLoaderData } from "react-router-dom";
import { Post } from "../components/Post";
import { contentLoader } from "../loaders";

function Posts() {
  const posts = useLoaderData();
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
      <form method="get" action="/posts" className="form mb-4">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Query</label>
            <input type="search" name="query" id="query" />
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select type="search" name="userId" id="userId">
              <option value="">Any</option>
              <option value="1">Leanne Graham</option>
              <option value="2">Ervin Howell</option>
              <option value="3">Clementine Bauch</option>
              <option value="4">Patricia Lebsack</option>
              <option value="5">Chelsey Dietrich</option>
              <option value="6">Mrs. Dennis Schulist</option>
              <option value="7">Kurtis Weissnat</option>
              <option value="8">Nicholas Runolfsdottir V</option>
              <option value="9">Glenna Reichert</option>
              <option value="10">Clementina DuBuque</option>
            </select>
          </div>
          <button className="btn">Filter</button>
        </div>
      </form>
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

// const loader = function loader({ request: { signal } }) {
//   return fetch("http://127.0.0.1:3000/posts", {
//     signal,
//   });
// };

const loader = contentLoader("posts");
export const PostsRoute = {
  loader,
  element: <Posts />,
};
