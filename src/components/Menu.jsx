import React from 'react';
import Card from './Card';
import img1 from '../assets/burger.jpeg';
import img2 from '../assets/coke.jpeg';
import img3 from '../assets/fries.jpeg';
import img4 from '../assets/pepsi.jpeg';

const Menu = ({ cart, addToCart }) => {
  const cards = [
    { id: 1, name: 'Hamburger', image: img1, price: 100 },
    { id: 2, name: 'Fries', image: img2, price: 70 },
    { id: 3, name: 'Coke', image: img3, price: 90 },
    { id: 4, name: 'Pepsi', image: img4, price: 100 },
  ];

  const handleIncrement = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      addToCart(updatedCart);
    } else {
      addToCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleDecrement = (item) => {
    const updatedCart = cart
      .map((cartItem) =>
        cartItem.id === item.id && cartItem.quantity > 0 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0);
    addToCart(updatedCart);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-3xl mt-4 font-serif mb-8">Menu Page</h1>
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card) => {
          const cartItem = cart.find((cartItem) => cartItem.id === card.id);
          const quantity = cartItem ? cartItem.quantity : 0;
          return (
            <Card
              key={card.id}
              card={card}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              quantity={quantity}
            />
          );
        })}
      </div>
      
    </div>
  );
};

export default Menu;
