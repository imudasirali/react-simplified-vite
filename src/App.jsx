import { useState, useEffect } from "react";
import User from "./User";

function App() {
  //https://jsonplaceholder.typicode.com/users

  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState();
  const controller = new AbortController();
  useEffect(() => {
    setloading(true);
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((e) => {
        if (e?.name == "AbortError") return;
        setError(e);
      })
      .finally(() => {
        setloading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  let jsx;

  if (loading) {
    jsx = <h2>Loading...</h2>;
  } else if (error != null) {
    jsx = <h2>error</h2>;
  } else {
    jsx = (
      <ul>
        {users.map((user, index) => {
          return (
            <User
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
            />
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <h1>User List</h1>
      {jsx}
    </>
  );
}

export default App;
