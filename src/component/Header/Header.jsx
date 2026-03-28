import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';

const Header = () => {
  return (
    <div>
      <h2 className='text-3xl font-bold text-blue-950 text-center'>This is Header</h2>
      <nav className='text-2xl m-10 text-center'>
        <NavLink  to='/'>Home</NavLink >
        <NavLink  to='/mobiles' >Mobiles</NavLink >
        <NavLink  to='/laptop'>Laptop</NavLink >
        <NavLink  to='/users'>Users</NavLink >
      </nav>
    </div>
  );
};

export default Header;