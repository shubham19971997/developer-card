import React from 'react'
import './Comments.css'
import { MdDelete } from 'react-icons/md'
import axios from 'axios'

function CommentCard({
  commentData: {
    comment: { userName, userImage, text, _id },
    cardId,
  },
}) {
  const deleteComment = () => {
    const deleteData = {
      cardId,
      commentId: _id,
    }
    axios
      .put('http://localhost:9000/card/deleteComment', deleteData)
      .then((res) => {
        console.log(res.data)
      })
  }

  return (
    <div className='comment' key={_id}>
      <div className='comment-card'>
        <div className='comment-header'>
          <img src={userImage} />
          <div>
            <p className='comment-name'>{userName}</p>
            <p className='comment-date'>28/12/21</p>
            <MdDelete
              onClick={deleteComment}
              className='comment-content-delete'
              size={25}
            />
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
