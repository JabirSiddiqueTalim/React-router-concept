import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
  const PostDetails=useLoaderData()
  const {id,title,body}=PostDetails;
  const navigate=useNavigate();
  const onClickhandle=()=>{
       navigate("/posts")
        

  }
  return (
    <div className='text-3xl font-bold text-blue-950 text-center'>
      This is post details
      <h2>Id : {id}</h2>
      <h2>Title : {title}</h2>
      <p>Body : {body}</p>
      <button onClick={onClickhandle} className='bg-black text-white rounded-4xl p-2 m-3' >Go Back</button>
      
    </div>
  );
};

export default PostDetails;