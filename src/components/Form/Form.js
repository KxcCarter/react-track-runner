import React, { Component } from 'react';
//import RunTracker from '../RunTracker/RunTracker';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastRun: 'No Data',
      longestRun: 'No Data',
    };
  }

  addRun = (event) => {
    event.preventDefault();
    console.log(`in addRun`);
    this.setState({
      lastRun: this.state.currentRun,
    });
    console.log(this.state.lastRun);
  };

  handleChange = (event) => {
    this.setState({
      currentRun: event.target.value,
    });

    console.log(this.state.lastRun);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addRun}>
          <input type="text" required placeholder="Miles Ran" onChange={this.handleChange} />
          <button>Add New Run</button>
        </form>

        <p>Last Run: {this.state.lastRun}</p>
        <p>Longest Run: {this.state.longestRun}</p>
        {/* <RunTracker value={this.state.lastRun} recent={this.state} longest="null" /> */}
      </div>
    );
  }
}

export default Form;
