import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">My Book App</Link>
        <div>
          <Link to="/" className="text-white mx-2">Search Books</Link>
          <Link to="/bookshelf" className="text-white mx-2">My Bookshelf</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
