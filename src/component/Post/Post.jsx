import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
  const {id,title,body}=post;
  return (
    <div className='border border-b-blue-950 rounded-3xl'>
      <h2>Id: {id}</h2>
      <h2>Title : {title}</h2>
      <p>Body : {body}</p>
      <Link to={`/posts/${id}`}>
      <button className='border-t-cyan-900 bg-blue-950 text-amber-50 rounded-4xl p-3 m-2'>Show Details Post</button>
      </Link>
      
    </div>
  );
};

export default Post;