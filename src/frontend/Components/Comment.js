import React, { useState, useEffect } from 'react'
import './Comments.css'
import { AiOutlineSend } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import './Comments.css'
import axios from 'axios'
import { MdDelete } from 'react-icons/md'

function Comments(props) {
  const User = useSelector((state) => state.myCard)
  const cardId = props.commentData.cardId
  const [comments, setComments] = useState(props.commentData.comments)
  let [checker, setChecker] = useState(2)
  // const [db, setDB] = useState(true)
  const [moreComments, setMoreComments] = useState(false)
  const [commentText, setCommentText] = useState('')
  let index = 0
  console.log(User._id)
  console.log(cardId)
  const renderComment = comments.map((comment) => {
    if (index < checker) {
      index++
      const deleteComment = () => {
        const deleteData = {
          cardId,
          commentId: comment._id,
        }
        axios
          .put('http://localhost:9000/card/deleteComment', deleteData)
          .then((res) => {
            setComments(res.data.comments)
          })
      }
      return (
        <div className='comment' key={comment._id}>
          <div className='comment-card'>
            <div className='comment-header'>
              <img src={comment.userImage} />
              <div>
                <p className='comment-name'>{comment.userName}</p>
                <p className='comment-date'>28/12/21</p>
              </div>
            </div>
            <div className='comment-content'>
              <p className='comment-content-text'>{comment.text}</p>
              {comment.userName === User.name ? (
                <MdDelete
                  onClick={deleteComment}
                  className='comment-content-delete'
                  size={25}
                />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      )
    } else {
      return ''
    }
  })

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
        if (res.data.status === 'OK') {
          const temp = [...comments]
          temp.unshift({ ...commentData, _id: res.data._id })
          setComments(temp)
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
        <button
          className='comment-numbers-button'
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
