import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0 
        }
    }
    render() {

        const handleClick = () => {
            return this.setState(currentState => {
                return { counter: currentState.counter + 1 }
            })
        } 

        return <div onClick={handleClick}>Counter: {this.state.counter}</div>
    }

}