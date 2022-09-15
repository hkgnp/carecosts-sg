import React, { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";
import Summary from "./Summary";

const Questions = () => {
  const [loaded, setLoaded] = useState(false);
  const [questions, setQuestions] = useState({});
  const [answers, setAnswers] = useState({});
  const [displayQn, setDisplayQn] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await axios.get("qns.json");
      setQuestions(response.data);
      setLoaded(true);
    })();
  }, []);

  // The function below takes the answers provided by the user and to add it to the "answers" state. After all the questions, you would have an object of all the answers (defined by the points associated with each answer) within the "answers" state. The getTotalCount function calculates all the points per question to get the total score. This score is proceesed within the component called "Summary".
  const handleForm = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
    setDisplayQn(parseInt(e.target.name) + 1);
  };

  const prevQn = (e) => {
    setDisplayQn(parseInt(e.target.value) - 1);
  };

  // Used to calculate score
  const getTotalCount = () => {
    let i = 1;
    let count = 0;
    while (i < 10) {
      count = count + parseInt(answers[i]);
      i++;
    }
    return count;
  };

  return (
    <div className="container">
      {loaded &&
        questions.map((q) => (
          <Question
            key={q.qnumber}
            handleForm={handleForm}
            prevQn={prevQn}
            question={q.question}
            description={q.description}
            options={q.options}
            displayQn={displayQn}
          />
        ))}
      {displayQn === 10 && <Summary getTotalCount={getTotalCount} />}
    </div>
  );
};

export default Questions;
