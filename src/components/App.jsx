import { FeedbackButtons } from './FeedbackButtons/FeedbackButtons';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Component, useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const proceedFeedback = element => {
    switch (element) {
      case 'good':
        setGood(prev => prev + 1);
      case 'neutral':
        setNeutral(prev => prev + 1);
      case 'bad':
        setBad(prev => prev + 1);
    }
  };

  return (
    <>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackButtons
            options={options}
            proceedFeedback={proceedFeedback}
          />
        }
      />

      {countTotalFeedback() > 0 ? (
        <Section
          title="Statistics"
          children={
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positive={countPositiveFeedbackPercentage()}
            ></Statistics>
          }
        />
      ) : (
        <Notification message="There is no feedback right now😢" />
      )}
    </>
  );
};

export default App;
