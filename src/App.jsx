import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import "./styles.css";

function App() {
  const url = window.location.pathname;
  let page = "";
  switch (url) {
    case "/about":
      page = <About />;
      break;
    case "/store":
      page = <Store />;
      break;
    default:
      page = <Home />;
      break;
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/store">Store</a>
          </li>
        </ul>
      </nav>
      <main>{page}</main>
    </>
  );
}

export default App;
