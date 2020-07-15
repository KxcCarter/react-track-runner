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
    this.setState({
      lastRun: this.state.currentRun,
    });

    if (this.state.longestRun === 'No Data') {
      this.setState({
        longestRun: this.state.currentRun,
      });
    } else if (this.state.currentRun > this.state.longestRun) {
      this.setState({
        longestRun: this.state.currentRun,
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      currentRun: Number(event.target.value),
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addRun}>
          <input type="number" required placeholder="Miles Ran" onChange={this.handleChange} />
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
