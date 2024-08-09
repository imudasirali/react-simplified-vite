import CardFunction from "./components/CardFunction";
import CardClass from "./components/CardClass";
import user from "./json/user.json";
import "./css/style.css";

function App() {
  return (
    <div>
      <CardFunction
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      ></CardFunction>

      <br />

      <CardClass
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      ></CardClass>
    </div>
  );
}

export default App;
