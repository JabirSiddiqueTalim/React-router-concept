import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
  const usersInfo=use(usersPromise);
  console.log('users 2-->',usersInfo)
  return (
    <div>
      
    </div>
  );
};

export default Users2;