import React from 'react';

const Question = (props) => {
  return (
    <React.Fragment>
      {props.displayQn === props.question && (
        <div>
          <h1>Question {props.question}:</h1>
          <h2>{props.description}</h2>

          <button
            className="button-option"
            name={props.question}
            value="1"
            onClick={props.handleForm}
          >
            {props.options.one}
          </button>
          <button
            className="button-option"
            name={props.question}
            value="2"
            onClick={props.handleForm}
          >
            {props.options.two}
          </button>
          <button
            className="button-option"
            name={props.question}
            value="3"
            onClick={props.handleForm}
          >
            {props.options.three}
          </button>
          <button
            className="button-option"
            name={props.question}
            value="4"
            onClick={props.handleForm}
          >
            {props.options.four}
          </button>
          {props.question !== 1 && (
            <button value={props.question} onClick={props.prevQn}>
              Previous Question
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Question;
