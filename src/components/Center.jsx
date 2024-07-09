
import React from 'react';
import { Link } from 'react-router-dom';

const Center = () => {
  return (
    <div className="flex flex-col items-center mt-20 h-screen">
      <div className="p-8 text-center">
        <p className="font-serif text-8xl text-center ">Welcome to Food's <br /> Kitchen</p>
      </div>
      <Link
        to="/menu"
        className="w-32 h-12 mt-4 bg-blue-500 text-white rounded-sm flex items-center justify-center"
      >
        GO TO MENU
      </Link>
    </div>
  );
};

export default Center;
