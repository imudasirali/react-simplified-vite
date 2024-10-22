import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

function EditPost() {
  const { singlePost, users } = useLoaderData();
  const errorMessage = useActionData();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting" || state === "loading";
  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      <Form method="post" className="form">
        <div className="form-row">
          <div
            className={`form-group ${
              errorMessage && errorMessage.errorTitle && "error"
            }`}
          >
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={singlePost.title}
            />
            {errorMessage && errorMessage.errorTitle && (
              <div className="error-message">Required</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select name="userId" id="userId" value={singlePost.userId}>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div
            className={`form-group ${
              errorMessage && errorMessage.errorBody && "error"
            }`}
          >
            <label htmlFor="body">Body</label>
            <textarea
              name="body"
              id="body"
              defaultValue={singlePost.body}
            ></textarea>
            {errorMessage && errorMessage.errorBody && (
              <div className="error-message">Required</div>
            )}
          </div>
        </div>
        <div className="form-row form-btn-row">
          <Link className="btn btn-outline" to={`/posts/${singlePost.id}`}>
            Cancel
          </Link>
          <button disabled={isSubmitting} className="btn">
            {isSubmitting ? "Loading" : "Update"}
          </button>
        </div>
      </Form>
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

  const users = fetch("http://127.0.0.1:3000/users", {
    signal,
  }).then((res) => res.json());

  return { singlePost, users: await users };
}

const action = async ({ request, params }) => {
  let errors = { errorTitle: false, errorBody: false };
  const formData = await request.formData();
  const title = formData.get("title");
  const userId = formData.get("userId");
  const body = formData.get("body");
  if (title === "") {
    errors.errorTitle = true;
    return errors;
  }
  if (body === "") {
    errors.errorBody = true;
    return errors;
  }
  await fetch(`http://127.0.0.1:3000/posts/${params.postId}`, {
    method: "PUT",
    signal: request.signal,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, title, body }),
  }).then((res) => res.json());
  return redirect(`/posts/${params.postId}`);
};

export const EditPostRoute = {
  loader,
  action,
  element: <EditPost />,
};
