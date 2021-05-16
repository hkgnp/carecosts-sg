import React from 'react';
import Fade from 'react-reveal/Fade';

const Question = (props) => {
  return (
    <React.Fragment>
      {props.displayQn === props.question && (
        <div>
          <h1 className="font-semibold text-5xl mb-2">
            Question {props.question}:
          </h1>
          <h2 className="font-semibold text-lg mb-10">{props.description}</h2>
          <Fade up>
            <button
              className="block my-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
              name={props.question}
              value={props.options.one.score}
              onClick={props.handleForm}
            >
              {props.options.one.text}
            </button>
            <button
              className="block my-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
              name={props.question}
              value={props.options.two.score}
              onClick={props.handleForm}
            >
              {props.options.two.text}
            </button>
            <button
              className="block my-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
              name={props.question}
              value={props.options.three.score}
              onClick={props.handleForm}
            >
              {props.options.three.text}
            </button>
            <button
              className="block my-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
              name={props.question}
              value={props.options.four.score}
              onClick={props.handleForm}
            >
              {props.options.four.text}
            </button>
          </Fade>
          {props.question !== 1 && (
            <button
              className="mt-2 mr-10 bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded"
              value={props.question}
              onClick={props.prevQn}
            >
              Prev Qn
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Question;
