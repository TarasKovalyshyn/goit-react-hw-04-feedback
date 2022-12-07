import Notification from 'components/Notification/Notification';
const Statistscs = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  title,
}) => {
  return (
    <>
      {total > 0 ? (
        <>
          <h2>{title}</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <Notification />
      )}
    </>
  );
};
export default Statistscs;
