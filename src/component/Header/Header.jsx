import React from 'react';
import { Link } from 'react-router';
import './Header.css';

const Header = () => {
  return (
    <div>
      <h2 className='text-3xl font-bold text-blue-950 text-center'>This is Header</h2>
      <nav className='text-2xl m-10 text-center'>
        <Link  to='/'>Home</Link>
        <Link to='/mobiles' >Mobiles</Link>
        <Link to='/laptop'>Laptop</Link>
      </nav>
    </div>
  );
};

export default Header;