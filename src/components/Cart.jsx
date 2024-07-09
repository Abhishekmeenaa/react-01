import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {

  const  navigate = useNavigate()
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    console.log('Removing item:', id);
    console.log('Updated Cart:', updatedCart);
    setCart(updatedCart);
  };

  const handleIncrement = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    console.log('Incrementing item:', item.id);
    console.log('Updated Cart:', updatedCart);
    setCart(updatedCart);
  };

  const handleDecrement = (item) => {
    
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    ).filter((cartItem) => cartItem.quantity > 0); 
    console.log('Decrementing item:', item.id);
    console.log('Updated Cart:', updatedCart);
    setCart(updatedCart);
  };

  const handleSaveAndCheckout = () => {
    alert('Proceeding to checkout...');
  };

  const handleCancel = () => {
    setCart([]);
  
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-8">Cart Summary</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="border p-4 w-full md:w-[600px] mx-auto">
          {cart.map((item) => (
            <div key={item.id} className="border p-4 mb-4 flex justify-between items-center">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="h-16 w-16 object-cover mr-4" />
                <div>
                  <h2 className="text-xl">{item.name}</h2>
                  <p className="text-lg">₹{item.price} x {item.quantity}</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => handleDecrement(item)} className="bg-red-500 text-white px-2 py-1">-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => handleIncrement(item)} className="bg-green-500 text-white px-2 py-1">+</button>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-lg mb-2">Total: ₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="border fle p-4 text-right">
            <h2 className="text-2xl mb-4">Total: ₹{getTotalPrice()}</h2>
            <div className="flex justify-between">
              <Link to="/Menu" onClick={handleCancel} className="bg-red-500 text-white px-4 py-2">Cancel</Link>
              <Link to ="/Ceckout"  onClick={handleSaveAndCheckout} className="bg-green-500 text-white px-4 py-2">Save and Checkout</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
