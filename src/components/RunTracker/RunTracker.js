import React, { Component } from 'react';

class RunTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recent: this.props.value,
    };
  }

  render() {
    return (
      <div>
        <p>Recent Run: {this.props.value}</p>
        <p>Longest Run: {this.props.recent.runLog}</p>
      </div>
    );
  }
}

export default RunTracker;
