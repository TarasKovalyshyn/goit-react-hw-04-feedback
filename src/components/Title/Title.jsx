import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <>
        <h1>Pleace leave feedback </h1>

        <FeedbackOptions />

        {/* <Statistics
          good={0}
          neutral={0}
          bad={0}
          total={0}
          positivePercentage={0}
        ></Statistics> */}
      </>
    );
  }
}
export default Title;
