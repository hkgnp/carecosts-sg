import React, { Fragment } from 'react';

const Item = (props) => {
  return (
    <div className="flex justify-between items-center block bg-blue-600 py-5 px-4 w-full text-white mb-1 shadow-xxl">
      <div className="flex-col items-center w-3/4">
        <p className="text-xs my-2">
          <span className="rounded-full bg-blue-400 py-1 px-5">
            {props.frequency}
          </span>
        </p>
        <p>{props.item}</p>
        <p className="text-xs ">
          {props.description.split('\\r').map((value, index) => {
            return (
              <Fragment key={index}>
                {value}
                <br />
              </Fragment>
            );
          })}
        </p>
      </div>
      <div className="font-semibold bg-green-400 rounded flex items-center justify-center w-20 h-12">
        <p>${props.cost}</p>
      </div>
    </div>
  );
};

export default Item;
