const Feedback = ({ typeFeedback, totalFeedback, positiveFeedback }) => {
  return (
    <ul>
      <li>Good: {typeFeedback.good}</li>
      <li>Neutral: {typeFeedback.neutral}</li>
      <li>Bad: {typeFeedback.bad}</li>
      <li>Total:{totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
