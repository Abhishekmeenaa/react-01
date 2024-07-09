import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ cartCount }) => {
  return (
    <>
    <nav className="flex justify-between p-4 bg-blue-800 text-white">
      <h1 className='text-3xl font-serif' >Food's restaurnt</h1>
        <Link to={"/cart"} >
        Cart: {cartCount}
        </Link>
    </nav>
      <div>
      </div>
     
    </>
  );
};

export default Nav;
