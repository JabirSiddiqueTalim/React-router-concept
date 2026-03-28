import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
  const users=useLoaderData();
  console.log(users);
  return (
    <div>
      <h2 className='text-3xl font-bold text-blue-950 text-center'>This is users page</h2>
      
    </div>
  );
};

export default Users;