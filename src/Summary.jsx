import React from 'react';
import Basket1 from './Basket1';
import Rotate from 'react-reveal/Rotate';

const Summary = (props) => {
  const score = props.getTotalCount();

  const calculateCosts = (score) => {
    if (score < 7) {
      return <Basket1 />;
    } else if (score < 25) {
      return <p>$1000</p>;
    } else if (score < 49) {
      return <p>$2000</p>;
    } else {
      return <p>$5000</p>;
    }
  };

  return (
    <Rotate right>
      <div className="block bg-blue-400 rounded-lg p-5">
        <h1>Summary</h1>
        <p className="mb-5">
          Thank you for taking the time to do the quick survey. An estimate of
          your estimated costs are as follows:
        </p>
        <p className="mb-5">{calculateCosts(score)}</p>
        <p>
          As this is meant to be an estimate, do speak to your Medical Social
          Worker for further details. If you do not have one, please ask your
          doctor to refer you to one.
        </p>
      </div>
    </Rotate>
  );
};

export default Summary;
