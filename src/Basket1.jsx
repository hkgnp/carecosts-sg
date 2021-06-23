import React from 'react';

import Basket from './Basket';

const Basket1 = () => {
  const basket1 = 'basket1';
  return (
    <React.Fragment>
      <h1 className="px-12 py-6">Your loved one is doing well.</h1>
      <Basket basketNo={basket1} />
    </React.Fragment>
  );
};

export default Basket1;
