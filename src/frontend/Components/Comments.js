import React, { useState } from 'react'
import './Comments.css'
import { AiOutlineSend } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import logo from '../dc.png'
import './Comments.css'
import axios from 'axios'

function Comments(props) {
  const User = useSelector((state) => state.myCard)
  const cardId = props.cardId
  const [commentText, setCommentText] = useState('')
  const send = () => {
    const commentData = {
      cardId,
      userId: User._id,
      userImage: User.imagepath,
      userName: User.name,
      commentText,
    }
    axios.post('http://localhost:9000/card/comment',commentData).then((res)=>{
      console.log(res.data);
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
      <div className='comment'>
        <div className='comment-card'>
          <div className='comment-header'>
            <img src={logo} />
            <div>
              <p className='comment-name'>RandomGuyOnYT</p>
              <p className='comment-date'>21/12/2021</p>
            </div>
          </div>
          <div className='comment-content'>
            <p>Learn mern stack for full stack development!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
