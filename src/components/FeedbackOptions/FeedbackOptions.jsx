const FeedbackOptions = ({
  handleIncrementGood,
  handleIncrementNeutral,
  handleIncrementBad,
}) => {
  return (
    <div>
      <button type="button" onClick={handleIncrementGood}>
        Good
      </button>
      <button type="button" onClick={handleIncrementNeutral}>
        Neutral
      </button>
      <button type="button" onClick={handleIncrementBad}>
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
