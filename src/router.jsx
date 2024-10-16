import {
  createBrowserRouter,
  Outlet,
  redirect,
  useNavigation,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Navbar } from "./Navbar";
import { TeamMember } from "./TeamMember";
import { Team } from "./Team";
import { TeamNav } from "./TeamNav";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: <h1>404!</h1>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/store", element: <Store /> },
      {
        path: "/team",
        element: <TeamNavLayout />,
        loader: ({ request: { signal } }) => {
          return fetch("https://jsonplaceholder.typicode.com/users", {
            signal,
          });
        },
        children: [
          {
            index: true,
            element: <Team />,
          },
          {
            path: ":memberId",
            loader: ({ params, request: { signal } }) => {
              return fetch(
                `https://jsonplaceholder.typicode.com/users/${params.memberId}`,
                { signal }
              ).then((res) => {
                if (res.status == 200) return res.json();
                throw redirect("/team");
              });
            },
            element: <TeamMember />,
          },
        ],
      },
    ],
  },
]);

function NavLayout() {
  const { state } = useNavigation();
  return (
    <>
      <Navbar />
      {state === "loading" ? <h1>Loading</h1> : <Outlet />}
    </>
  );
}

function TeamNavLayout() {
  return (
    <>
      <TeamNav />
      <Outlet />
    </>
  );
}
