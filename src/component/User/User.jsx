import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
  const {name,id,username,address}=user;
  console.log(name);

  return (
    <div className='border  border-amber-950 rounded-3xl border-5 p-3 m-20 text-3xl font-bold text-blue-950 text-center'>
      <h2>{name}</h2>
      <p>{id}</p>
      <p>{username}</p>
      <p className='m-4'>{address.city}</p>
      <Link className='border border-amber-600 p-1 bg-amber-950 text-white rounded-2xl ' to={`/users2/${id}`} >Show Details</Link>
    
    </div>
  );
};

export default User;