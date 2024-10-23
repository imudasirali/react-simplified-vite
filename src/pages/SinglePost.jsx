import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
function SinglePost() {
  const { singlePost, comments, user } = useLoaderData();
  const { state } = useNavigation();
  const isDeleting = state === "submitting" || state === "loading";

  return (
    <>
      <h1 className="page-title">
        {singlePost.title}
        <div className="title-btns">
          <div className="form-row form-btn-row">
            <Link className="btn btn-outline" to={"edit"}>
              Edit
            </Link>
            <Form method="post" className="form">
              <button disabled={isDeleting} className="btn btn-delete">
                {isDeleting ? "Deleting" : "Delete"}
              </button>
            </Form>
          </div>
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
    `http://127.0.0.1:3000/posts/${params.postId}`,
    {
      signal,
    }
  ).then((res) => res.json());

  const comments = fetch(
    `http://127.0.0.1:3000/posts/${params.postId}/comments`,
    {
      signal,
    }
  ).then((res) => res.json());

  const user = await fetch(`http://127.0.0.1:3000/users/${singlePost.userId}`, {
    signal,
  }).then((res) => res.json());

  return { singlePost, comments: await comments, user: await user };
}

const action = async ({ request, params }) => {
  await fetch(`http://127.0.0.1:3000/posts/${params.postId}`, {
    method: "DELETE",
    signal: request.signal,
  }).then((res) => res.json());
  return redirect("/posts/");
};

export const SinglePostRoute = {
  loader,
  action,
  element: <SinglePost />,
};
