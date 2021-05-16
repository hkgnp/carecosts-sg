import React from 'react';
import Fade from 'react-reveal/Fade';
import Item from './Item';

const Basket1 = () => {
  return (
    <Fade up>
      <Item
        frequency="Once-off"
        item="Motorised scooter"
        description="To help with mobility"
        cost="$1,200"
      />
      <Item
        frequency="Monthly"
        item="Medical expenses"
        description="For treatment"
        cost="$200/mth"
      />
      <p className="mb-4 p-4 text-light">
        Your loved one is generally well, and other than the usual medical
        follow-ups, the following services/ items may be useful for you.
      </p>
    </Fade>
  );
};

export default Basket1;
