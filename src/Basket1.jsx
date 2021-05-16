import React from 'react';
import Fade from 'react-reveal/Fade';

const Basket1 = () => {
  return (
    <React.Fragment>
      <p className="mb-4">
        Your loved one is generally well, and other than the usual medical
        follow-ups, the following services/ items may be useful for you.
      </p>
      <Fade up>
        <div className="block bg-purple-400 rounded-lg p-5">
          Motorised scooter
        </div>
      </Fade>
    </React.Fragment>
  );
};

export default Basket1;
