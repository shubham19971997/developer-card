import React, { useState, useEffect } from 'react'
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
  let [checker, setChecker] = useState(2)
  const [moreComments, setMoreComments] = useState(false)
  const [commentText, setCommentText] = useState('')
  let index = 0
  const renderComment = comments
    .map((comment) => {
      if (index < checker) {
        index++
        return <CommentCard commentData={{comment,cardId}} key={comment._id} />
      } else {
        return ''
      }
    })
    .reverse()
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
      <div className='comment-numbers'>
        <button className='comment-numbers-button'
          onClick={() => {
            if (checker === comments.length) {
              setChecker(2)
            } else {
              setChecker(comments.length)
            }

            setMoreComments(!moreComments)
          }}
        >
          {moreComments ? 'show less comments' : 'show more comments'}
        </button>
      </div>
      {renderComment}
    </div>
  )
}

export default Comments
