import React from 'react';

import Basket from './Basket';

const Basket1 = () => {
  const basket1 = 'basket1';
  return (
    <React.Fragment>
      <p className="px-4 py-6">
        Your loved one is doing well and does not need much care.
      </p>
      <Basket basketNo={basket1} />
    </React.Fragment>
  );
};

export default Basket1;
