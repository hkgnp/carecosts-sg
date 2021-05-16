import React from 'react';
import Basket1 from './Basket1';
import Basket2 from './Basket2';
import Basket3 from './Basket3';
import Basket4 from './Basket4';
import { Rotate } from 'react-awesome-reveal';

const Summary = (props) => {
  const score = props.getTotalCount();

  const calculateCosts = (score) => {
    if (score < 7) {
      return <Basket1 />;
    } else if (score < 25) {
      return <Basket2 />;
    } else if (score < 49) {
      return <Basket3 />;
    } else {
      return <Basket4 />;
    }
  };

  return (
    <Rotate right>
      <div className="block bg-green-500 rounded-tl-lg rounded-tr-lg p-12">
        <h1 className="font-semibold text-5xl mb-8">Summary</h1>
        <p className="mb-5">
          Thank you for taking the time to do the quick survey. An estimate of
          your estimated costs are as follows:
        </p>
        <p className="text-xs">
          As this is meant to be an estimate, do speak to your Medical Social
          Worker for further details. If you do not have one, please ask your
          doctor to refer you to one.
        </p>
      </div>
      <div className="block bg-green-200 text-black rounded-bl-lg rounded-br-lg p-0">
        <p className="mb-5">{calculateCosts(score)}</p>
      </div>
    </Rotate>
  );
};

export default Summary;
