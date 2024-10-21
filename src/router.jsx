import {
  createBrowserRouter,
  Navigate,
  Outlet,
  useNavigation,
} from "react-router-dom";
import { PostsRoute } from "./pages/Posts";
import { UsersRoute } from "./pages/Users";
import { TodosRoute } from "./pages/Todos";
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
        ...TodosRoute,
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
