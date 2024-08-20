import React from "react";

export default class PersonClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mudasir Class",
      age: 31,
    };
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
        <p>
          My name is {this.state.name} and I am {this.state.age} years old.
        </p>
      </div>
    );
  }
}
