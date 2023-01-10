import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistscs from './Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return ((good / total) * 100).toFixed(1);
  };

  const stateItemNames = Object.keys({ good, neutral, bad });

  return (
    <div
      style={{
        marginLeft: '15px',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={stateItemNames}
          onLeaveFeedback={handleFeedback}
        />
        <Statistscs
          title={'Statistics'}
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}
