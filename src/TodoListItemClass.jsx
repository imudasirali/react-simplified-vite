import React from "react";

export default class TodoListItem extends React.Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox" checked={this.props.isComplete} />
          {this.props.children}
        </label>
      </li>
    );
  }
}
