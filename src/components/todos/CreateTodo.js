import React, { Component } from 'react'
import { connect } from "react-redux";

class CreateTodo extends Component {

    
  state = {
    text: ""
  }

  handleChange = (event) => {
    console.log(this.state)
    this.setState({
      text: event.target.value
    })
  };

  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: "ADD_TODO", payload: this.state})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect ()(CreateTodo)
