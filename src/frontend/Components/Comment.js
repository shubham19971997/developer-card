import React, { useState } from 'react'
import './Comments.css'
import { AiOutlineSend } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import './Comments.css'
import axios from 'axios'
import CommentCard from './CommentCard'

function Comments(props) {
  const User = useSelector((state) => state.myCard)
  const cardId = props.commentData.cardId
  const [comments, setComments] = useState(props.commentData.comments)
  const renderComment = comments
    .map((comment) => {
      return <CommentCard commentData={comment} />
    })
    .reverse()
  const [commentText, setCommentText] = useState('')
  const send = () => {
    const commentData = {
      cardId,
      userImage: User.imagepath,
      userName: User.name,
      text: commentText,
    }
    axios
      .post('http://localhost:9000/card/comment', commentData)
      .then((res) => {
        console.log(res.data)
        if (res.data.status === 'OK') {
          console.log(comments)
          setComments((prev) => [
            ...prev,
            { ...commentData, _id: res.data._id },
          ])

          setCommentText('')
        }
      })
  }
  return (
    <div className='comments'>
      <div className='comment-input'>
        <input
          value={commentText}
          type='text'
          onChange={(e) => setCommentText(e.target.value)}
          placeholder='Write your thoughts here...'
        />
        <div className='send-logo'>
          <AiOutlineSend size={30} onClick={send} />
        </div>
      </div>
      {renderComment}
    </div>
  )
}

export default Comments
