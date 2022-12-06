import React, { Component } from 'react';
import Notification from '../Notification/Notification';

class Statistics extends Component {
  render() {
    const a = true;
    // const total = this.state.good + this.state.neutral + this.state.bad;

    return (
      <>
        <h3>Statistics</h3>

        {a === true ? (
          <>
            <p>Good: {this.props.good}</p>
            <p>Neutral: {this.props.neutral}</p>
            <p>Bad: {this.props.bad}</p>
            <p>
              Total: {this.props.good + this.props.neutral + this.props.bad}
            </p>
            {/* <p>Positive feedback: {(this.state.good/total) * 100}%</p> */}
          </>
        ) : (
          <Notification />
        )}
      </>
    );
  }
}

export default Statistics;
