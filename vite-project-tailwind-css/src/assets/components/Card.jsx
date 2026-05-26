import React from 'react';

const Card = (props) => {
    console.log('Card component rendered with props:', props);
  return (
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{props.cardTitle || 'Default Card Title'}</h2>
      <p className="text-gray-600 mb-4">{props.cardDescription}</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Action
      </button>
    </div>
  );
};

export default Card;
