import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <h1 className="font-semibold text-5xl mb-6">Contact List</h1>
      <p className=" text-lg mb-10">
        <ul>
          <li>National University Hospital</li>
          <li>Alexandra Hospital</li>
          <li>Ng Teng Fong Hospital</li>
          <li>Jurong Community Hospital</li>
          <li>Tan Tock Seng Hospital</li>
        </ul>
      </p>
      <a
        className="mt-2 mr-10 bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded"
        href="/"
      >
        Back to Questionnaire
      </a>
    </div>
  );
};

export default Contact;
