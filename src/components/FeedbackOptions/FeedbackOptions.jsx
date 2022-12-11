import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({
  handleIncrementGood,
  handleIncrementNeutral,
  handleIncrementBad,
}) => {
  return (
    <div className={css.div}>
      <button
        type="button"
        onClick={handleIncrementGood}
        className={css.buttons}
      >
        Good
      </button>
      <button
        type="button"
        onClick={handleIncrementNeutral}
        className={css.buttons}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={handleIncrementBad}
        className={css.buttons}
      >
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
