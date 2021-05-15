import React from 'react';

const Question = (props) => {
  return (
    <React.Fragment>
      {props.displayQn === props.question && (
        <div>
          <h1>Question {props.question}:</h1>
          <h2>{props.description}</h2>

          <button name={props.question} value="1" onClick={props.handleForm}>
            {props.options.one}
          </button>
          <button name={props.question} value="2" onClick={props.handleForm}>
            {props.options.two}
          </button>
          <button name={props.question} value="3" onClick={props.handleForm}>
            {props.options.three}
          </button>
          <button name={props.question} value="4" onClick={props.handleForm}>
            {props.options.four}
          </button>
          <button value={props.question} onClick={props.nextQn}>
            Next Question
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Question;
