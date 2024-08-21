import React from "react"

export class ChildClass extends React.Component {
  constructor() {
    super()
    this.state = {
      age: 0,
      name: "",
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Render');
    if ((prevState.name != this.state.name) || (prevState.age != this.state.age)) {
      console.log('My name is', this.state.name, 'and my age is', this.state.age);
    }

    if(prevState.name != this.state.name) {
      document.title = this.state.name;

      if (this.nameTimeout != null) {
        clearTimeout(this.nameTimeout)
      }

      this.nameTimeout = setTimeout(() => {
        console.log(`My name is ${this.state.name}`)
      }, 1000)
    }
  }

  componentDidMount() {
    console.log('Hi');
  }

  componentWillUnmount() {
    if (this.nameTimeout != null) {
      clearTimeout(this.nameTimeout)
    }
    console.log('Bye');
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button
          onClick={() =>
            this.setState(state => {
              return { age: state.age - 1 }
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState(state => {
              return { age: state.age + 1 }
            })
          }
        >
          +
        </button>
        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    )
  }
}