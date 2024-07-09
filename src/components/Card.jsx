import React from 'react';

const Card = ({ card, handleIncrement, handleDecrement, quantity }) => {
  return (
    <div className="border p-4 flex flex-col items-center">
      <img src={card.image} alt={card.name} className="h-40 w-60 object-cover mb-4" />
      <h2 className="text-xl mb-2">{card.name}</h2>
      <p className="text-lg mb-4">₹{card.price}</p>
      <div className="flex">
        <button onClick={() => handleDecrement(card)} className="bg-red-500 text-white px-2 py-1">-</button>
        <span className="mx-2">{quantity}</span>
        <button   onClick={() => handleIncrement(card)} className="bg-green-500 text-white px-2 py-1">+</button>
      </div>
    </div>
  );
};

export default Card;
