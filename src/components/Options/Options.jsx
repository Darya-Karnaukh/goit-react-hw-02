const Options = ({ feedbackType, resetFeedback, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => feedbackType("good")}>Good</button>
      <button onClick={() => feedbackType("neutral")}>Neutral</button>
      <button onClick={() => feedbackType("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
