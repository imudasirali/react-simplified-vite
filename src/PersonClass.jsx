import React from "react";
import { DisplayString } from "./DisplayString";

export default class PersonClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mudasir Class",
      age: 31,
    };
  }

  componentDidUpdate() {
    document.title = this.state.name;
  }

  render() {
    const handleChange = (e) => {
      this.setState({ name: e.target.value });
    };

    const increaseAge = () => {
      return this.setState((currentState) => {
        return { age: currentState.age + 1 };
      });
    };

    const decreaseAge = () => {
      return this.setState((currentState) => {
        return { age: currentState.age - 1 };
      });
    };
    return (
      <div>
        <input type="text" value={this.state.name} onChange={handleChange} />
        <br />
        <br />
        <button onClick={decreaseAge}>-</button>
        <span> {this.state.age} </span>
        <button onClick={increaseAge}>+</button>
        <DisplayString name={this.state.name} age={this.state.age} />
      </div>
    );
  }
}
