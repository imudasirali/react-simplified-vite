import { Link, useLoaderData } from "react-router-dom";
function SinglePost() {
  const { singlePost, comments, user } = useLoaderData();
  console.log(singlePost);
  return (
    <>
      <h1 className="page-title">
        {singlePost.title}
        <div className="title-btns">
          <Link className="btn btn-outline" to={`/posts/${singlePost.id}/edit`}>
            Edit
          </Link>
        </div>
      </h1>
      <span className="page-subtitle">
        By: <Link to={`/users/${user.id}`}> {user.name}</Link>
      </span>
      <div>{singlePost.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.map((comment) => (
          <div key={comment.id} className="card">
            <div className="card-body">
              <div className="text-sm mb-1">{comment.email}</div>
              {comment.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

async function loader({ request: { signal }, params }) {
  const singlePost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
    {
      signal,
    }
  ).then((res) => res.json());

  const comments = fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`,
    {
      signal,
    }
  ).then((res) => res.json());

  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${singlePost.userId}`,
    {
      signal,
    }
  ).then((res) => res.json());

  return { singlePost, comments: await comments, user: await user };
}

export const SinglePostRoute = {
  loader,
  element: <SinglePost />,
};
