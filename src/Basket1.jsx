import React from 'react';

import Basket from './Basket';

const Basket1 = () => {
  const basket1 = 'basket1';
  return (
    <React.Fragment>
      <p className="px-4 py-6">
        Your loved one is doing well! As he or she advances in age, it is common
        that they may have difficulties walking long distances. Some may then
        consider using a motorised scooter. However, it is also important to
        stay active and not be completely dependent on it! Whenever possible, do
        walk as much as the doctor permits.
      </p>
      <Basket basketNo={basket1} />
    </React.Fragment>
  );
};

export default Basket1;
