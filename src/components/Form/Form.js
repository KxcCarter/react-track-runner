import React, { Component } from 'react';
import RunTracker from '../RunTracker/RunTracker';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleForm = (event) => {
    event.preventDefault();
    console.log(`We're handling it, okay?`);
  };

  handleChange = (event) => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleForm}>
          <input placeholder="Miles Ran" onChange={this.handleChange}></input>
          <button>Add New Run</button>
        </form>
        <RunTracker />
      </div>
    );
  }
}

export default Form;
