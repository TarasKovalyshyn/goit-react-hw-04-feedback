import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleIncrementBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleIncrementGood}>Good</button>
        <button onClick={this.handleIncrementNeutral}>Neutral</button>
        <button onClick={this.handleIncrementBad}>Bad</button>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={0}
          positivePercentage={0}
        ></Statistics>
      </div>
    );
  }
}

export default FeedbackOptions;
