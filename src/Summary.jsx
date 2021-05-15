import React from 'react';

const Summary = (props) => {
  return (
    <div className="block bg-gray-400 rounded-lg p-5">
      <h1>Summary</h1>
      {props.getTotalCount()}
    </div>
  );
};

export default Summary;
