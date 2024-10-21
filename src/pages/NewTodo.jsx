import { Form, Link, useActionData, useNavigation } from "react-router-dom";

export function NewTodo() {
  const errorMessage = useActionData();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting" || state === "loading";

  return (
    <>
      <h1 className="page-title">New Todo</h1>
      <Form method="post" className="form">
        <div className="error-message">{errorMessage}</div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
        </div>
        <div className="form-row form-btn-row">
          <Link className="btn btn-outline" to="..">
            Back
          </Link>
          <button disabled={isSubmitting} className="btn">
            {isSubmitting ? "Loading" : "Create"}
          </button>
        </div>
      </Form>
    </>
  );
}
