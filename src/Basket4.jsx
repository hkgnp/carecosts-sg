import React from 'react';
import Basket from './Basket';

const Basket4 = () => {
  const basket4 = 'basket4';
  return (
    <React.Fragment>
      <p className="px-4 py-6">
        Your loved one needs a lot of care, and this may significantly increase
        your expenses. Below is an idea of some of the costs involved, but I
        strongly suggest that you meet with a Medical Social Worker so that you
        can get as much help as you need.
      </p>
      <p className="px-4 pb-6">
        Please see here for the {''}
        <a href="/contact">
          <u>
            contacts of Medical Social Work Departments in our local hospitals
          </u>
        </a>
        .
      </p>
      <Basket basketNo={basket4} />
    </React.Fragment>
  );
};

export default Basket4;
