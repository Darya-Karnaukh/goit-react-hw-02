import { useEffect, useState } from "react";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [typeFeedback, setTypeFeedback] = useState(() => {
    const savedFeedback = JSON.parse(window.localStorage.getItem("feedback"));
    if (savedFeedback) {
      return savedFeedback;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(typeFeedback));
  }, [typeFeedback]);

  const feedbackType = (option) => {
    setTypeFeedback((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };
  const totalFeedback =
    typeFeedback.good + typeFeedback.neutral + typeFeedback.bad;

  const positiveFeedback = totalFeedback
    ? Math.round((typeFeedback.good / totalFeedback) * 100)
    : 0;

  const resetFeedback = () => {
    setTypeFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        feedbackType={feedbackType}
        showReset={totalFeedback > 0}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          typeFeedback={typeFeedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
