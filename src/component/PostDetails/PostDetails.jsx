import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
  const PostDetails=useLoaderData()
  const {id,title,body}=PostDetails;
  return (
    <div className='text-3xl font-bold text-blue-950 text-center'>
      This is post details
      <h2>Id : {id}</h2>
      <h2>Title : {title}</h2>
      <p>Body : {body}</p>
      
    </div>
  );
};

export default PostDetails;