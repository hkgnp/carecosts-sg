import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';

const Questions = () => {
  const [loaded, setLoaded] = useState(false);
  const [questions, setQuestions] = useState({});
  const [answers, setAnswers] = useState({});
  const [displayQn, setDisplayQn] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await axios.get('qns.json');
      setQuestions(response.data);
      setLoaded(true);
    })();
  }, []);

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

  return (
    <div className="container">
      {loaded &&
        questions.map((q) => (
          <React.Fragment>
            <Question
              key={q.qnumber}
              handleForm={handleForm}
              prevQn={prevQn}
              qnumber={q.qnumber}
              question={q.question}
              description={q.description}
              options={q.options}
              displayQn={displayQn}
            />
          </React.Fragment>
        ))}
    </div>
  );
};

export default Questions;
