import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Center from './components/Center';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Ceckout from './components/Ceckout';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (updatedCart) => {
    setCart(updatedCart);
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <>
      <Nav cartCount={cartCount} />
      <div>
        <Routes>
          <Route path="/" element={<Center />} />
          <Route path="/menu" element={<Menu cart={cart} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path='ceckout' element={<Ceckout/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
