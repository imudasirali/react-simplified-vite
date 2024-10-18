import {
  createBrowserRouter,
  Navigate,
  Outlet,
  useNavigation,
} from "react-router-dom";
import { PostsRoute } from "./pages/Posts";
import { Users } from "./pages/Users";
import { Todos } from "./pages/Todos";
import { Navbar } from "./Navbar";
import { SingleUserRoute } from "./pages/SingleUser";
import { SinglePostRoute } from "./pages/SinglePost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    errorElement: <h1>404!</h1>,
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
        ],
      },
      {
        path: "/users",
        children: [
          {
            index: true,
            element: <Users />,
            loader: ({ request: { signal } }) => {
              return fetch("https://jsonplaceholder.typicode.com/users", {
                signal,
              });
            },
          },
          {
            path: ":userId",
            ...SingleUserRoute,
          },
        ],
      },
      {
        path: "/todos",
        loader: ({ request: { signal } }) => {
          return fetch("https://jsonplaceholder.typicode.com/todos", {
            signal,
          });
        },
        element: <Todos />,
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
