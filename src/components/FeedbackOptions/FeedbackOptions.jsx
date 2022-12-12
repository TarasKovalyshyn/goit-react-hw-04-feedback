import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.div}>
      {options.map((options, index) => (
        <button
          key={index}
          options={options}
          onClick={() => onLeaveFeedback(options)}
          className={css.buttons}
        >
          {options}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
