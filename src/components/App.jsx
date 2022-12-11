import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistscs from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // onLeaveFeedback = () => {};

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

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage().toFixed();

    return (
      <div
        style={{
          marginLeft: '15px',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleIncrementGood={this.handleIncrementGood}
            handleIncrementNeutral={this.handleIncrementNeutral}
            handleIncrementBad={this.handleIncrementBad}
          />
          {/* <FeedbackOptions options={this.state} onLeaveFeedback={}></FeedbackOptions> */}
          <Statistscs
            title={'Statistics'}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercent}
          />
        </Section>
      </div>
    );
  }
}
export default App;
