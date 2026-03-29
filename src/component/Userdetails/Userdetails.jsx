import React from 'react';
import { useLoaderData } from 'react-router';

const Userdetails = () => {
  const users=useLoaderData();
  const {id,username,email}=users;
  return (
    <div className='text-3xl font-bold text-blue-950 text-center'>
       <h2  className=' text-3xl font-bold text-blue-950 text-center'>This is user details </h2>
        <h2>ID :{id}</h2>
        <h2>UserName : {username}</h2>
        <h2>Email : {email}</h2>
       
       
      
    </div>
  );
};

export default Userdetails;