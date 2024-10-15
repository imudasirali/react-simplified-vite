import { createBrowserRouter, Outlet } from "react-router-dom";
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
        children: [
          {
            index: true,
            element: <Team />,
          },
          { path: "mudasir", element: <TeamMember name="Mudasir" /> },
        ],
      },
    ],
  },
]);

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
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
