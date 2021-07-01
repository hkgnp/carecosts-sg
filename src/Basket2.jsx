import React from 'react';
import Basket from './Basket';

const Basket2 = () => {
  const basket2 = 'basket2';
  return (
    <React.Fragment>
      <p className="px-4 py-6">
        Your loved one is starting to need more help with their day-to-day
        activities. They may be able to manage alone for short periods of time,
        but it is advisable to generally have some support to look out for them.
      </p>
      <p className="px-4 py-6">
        While a helper may help to lessen the worries you have if you are not
        able to be around all the time, you may also consider day care services,
        or home help services to only support certain activities.
      </p>
      <Basket basketNo={basket2} />
    </React.Fragment>
  );
};

export default Basket2;
