import React, { Component } from 'react'
// Import the connect function from react-redux.
import { connect } from 'react-redux'

class CreateTodo extends Component {
    constructor() {
        super();
        this.state = {
            text: ""
        }
    }

    // Always use arrow syntax.
    handleChange = event => {
        this.setState({
            text: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state);
        // // Had we not connected mapDispatchToProps, below would work.
        // this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
    }
       
    render() {
        return (
            <div>
                <form onSubmit={ event => this.handleSubmit(event)}>
                    <p>
                        <label>add todo</label>
                        <input
                            type="text"
                            // Due to arrow syntax, {(event) => this.handleChange(event)} can be short formed to below.  
                            onChange={this.handleChange}
                            // To create a controlled component, this value is set to the value in state.text.
                            value={this.state.text} />
                    </p>
                    <input type="submit" />
                </form>
                {/* Below is just a check to see what value is in our state.text*/}
                {this.state.text}
            </div>
        );
    }
};

// mapDispatchToProps needs to be outside of the class component.
// props now has props.addTodo and it will dispatch an action of "ADD_TODO" to the reducer.
const mapDispatchToProps = dispatch => {
    return {
        // formData is a place holder for the info passed in as an arg to the dispatch, payload.
        addTodo: (formData) => dispatch({type: "ADD_TODO", payload: formData})
    }
}

// Use connect to connect mapDispatchToProps to this component, CreateTodo.
export default connect(null, mapDispatchToProps)(CreateTodo);
// // Had we not bound mapDispatchToProps the below will work because "dispatch" is the default function call if not specifying another function.
// export default connect()(CreateTodo);