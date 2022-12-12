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

  handleFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  // handleIncrementGood = () => {
  //   this.setState(prevState => {
  //     return { good: prevState.good + 1 };
  //   });
  // };

  // handleIncrementNeutral = () => {
  //   this.setState(prevState => {
  //     return { neutral: prevState.neutral + 1 };
  //   });
  // };

  // handleIncrementBad = () => {
  //   this.setState(prevState => {
  //     return { bad: prevState.bad + 1 };
  //   });
  // };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    const stateItemNames = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage().toFixed();

    return (
      <div
        style={{
          marginLeft: '15px',
        }}
      >
        <Section title="Please leave feedback">
          {/* <FeedbackOptions
            handleIncrementGood={this.handleIncrementGood}
            handleIncrementNeutral={this.handleIncrementNeutral}
            handleIncrementBad={this.handleIncrementBad}
          /> */}
          <FeedbackOptions options={stateItemNames} onLeaveFeedback={this.handleFeedback}></FeedbackOptions>
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
