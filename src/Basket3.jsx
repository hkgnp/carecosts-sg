import React from 'react';
import Basket from './Basket';

const Basket3 = () => {
  const basket3 = 'basket3';
  return (
    <React.Fragment>
      <p className="px-4 py-6">
        It is certainly not an easy time, as your loved one is starting to
        require more help. It is normal to feel anxious while adjusting to your
        loved one's new condition, but it certainly be easier to have some
        support, and to talk to a Medical Social Worker about the challenges you
        forsee; these challenges may not just be financial challenges, but
        psychological or emotional in nature.
      </p>
      <Basket basketNo={basket3} />
    </React.Fragment>
  );
};

export default Basket3;
