import React, { Component } from 'react';

class RunTracker extends Component {
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
