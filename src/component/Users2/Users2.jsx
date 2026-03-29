import React, { use } from 'react';
import User from '../User/User';

const Users2 = ({usersPromise}) => {
  const users=use(usersPromise);
  
  return (
    <div>
      <h2  className=' text-3xl font-bold text-blue-950 text-center'>This is user 2</h2>
     {
      
      users.map( user => <User key={user.id} user={user}></User>)
      }
      
    </div>
  );
};

export default Users2;