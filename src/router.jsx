import {
  createBrowserRouter,
  Navigate,
  Outlet,
  redirect,
  useNavigation,
} from "react-router-dom";
import { PostsRoute } from "./pages/Posts";
import { UsersRoute } from "./pages/Users";
import { TodosRoute } from "./pages/Todos";
import { Navbar } from "./Navbar";
import { SingleUserRoute } from "./pages/SingleUser";
import { SinglePostRoute } from "./pages/SinglePost";
import { NewTodo } from "./pages/NewTodo";
import { NewPost } from "./pages/NewPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    // errorElement: <h1>404!</h1>,
    children: [
      { index: true, element: <Navigate to="/posts" /> },
      {
        path: "/posts",
        children: [
          {
            index: true,
            ...PostsRoute,
          },
          {
            path: ":postId",
            ...SinglePostRoute,
          },
          {
            path: "new",
            element: <NewPost />,
          },
        ],
      },
      {
        path: "/users",
        children: [
          {
            index: true,
            ...UsersRoute,
          },
          {
            path: ":userId",
            ...SingleUserRoute,
          },
        ],
      },
      {
        path: "/todos",
        children: [
          {
            index: true,
            ...TodosRoute,
          },
          {
            path: "new",
            element: <NewTodo />,
            action: async ({ request }) => {
              const formData = await request.formData();
              const title = formData.get("title");
              if (title === "") return "Title is required";
              const todo = await fetch("http://127.0.0.1:3000/todos/", {
                method: "POST",
                signal: request.signal,
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, completed: false }),
              }).then((res) => res.json());
              return redirect("/todos");
            },
          },
        ],
      },
      { path: "*", element: <h1>404 - Page Not Found</h1> },
    ],
  },
]);

function NavLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";
  return (
    <>
      <Navbar />
      {isLoading && <div className="loading-spinner" />}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  );
}
