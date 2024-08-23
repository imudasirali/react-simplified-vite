import Person from "./Person";
import PersonClass from "./PersonClass";

function App() {
  return (
    <div>
      <Person myname={"John Doe"} myage={30} favouriteNumber={7} />
      <Person myname={"Jane Doe"} myage={28} />
      <Person favouriteNumber={100} />
      <PersonClass />
    </div>
  );
}

export default App;
