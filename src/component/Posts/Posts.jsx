import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
  const posts=useLoaderData();
  return (
    <div className=' text-3xl font-bold text-blue-950 text-center'>
      This is Posts page
      {
        posts.map(post=><Post post={post}></Post>)
      }
      
    </div>
  );
};

export default Posts;