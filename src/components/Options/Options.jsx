const Options = ({ feedbackType, resetFeedback }) => {
  return (
    <div>
      <button onClick={() => feedbackType("good")}>Good</button>
      <button onClick={() => feedbackType("neutral")}>Neutral</button>
      <button onClick={() => feedbackType("bad")}>Bad</button>
      <button onClick={resetFeedback}>Reset</button>
    </div>
  );
};

export default Options;
