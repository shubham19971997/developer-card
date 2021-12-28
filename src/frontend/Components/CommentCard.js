import React from 'react';
import './Comments.css';

function CommentCard({commentData:{userName,userImage,text}}) {
    
  return (
    <div className='comment'>
      <div className='comment-card'>
        <div className='comment-header'>
          <img src={userImage} />
          <div>
            <p className='comment-name'>{userName}</p>
            <p className='comment-date'>28/12/21</p>
          </div>
        </div>
        <div className='comment-content'>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default CommentCard
