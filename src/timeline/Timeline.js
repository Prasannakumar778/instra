import React, { useState } from 'react'
import "./Timeline.css";
import Suggestion from './Suggestion';
import Post from './Posts/Post';
function Timeline() {
  const[posts, setPosts]=useState([
    {
      user:"Sivakarthikayan",
      postImage:"https://bigtechnologytrends.com/wp-content/uploads/2020/05/karthikeyan.jpg",
      likes:53,
      timestamp:"2d",
    },
    {
      user:"Thalapathy Vijay",
      postImage:"http://godofindia.com/wp-content/uploads/2017/05/vijay-20.jpg",
      likes:2000,
      timestamp:"2min",
    },
    {
      user:"Rohith Sharma",
      postImage:"https://im.indiatimes.in/facebook/2019/Oct/rohit_sharma_1572353374.jpg",
      likes:3000,
      timestamp:"1d",
    },
  ]);
  return (
    <div className='timeline'>
    <div className='timeline_left'>
      <div className='timeline_posts'>
       {posts.map((post)=>(
        <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp} />
       ))}
      </div>
  </div>
  <div className='timeline_right'>
    <Suggestion/>
  </div>
  </div>
  )
}

export default Timeline
