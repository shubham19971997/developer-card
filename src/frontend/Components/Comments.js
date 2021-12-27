import React from 'react'
import './Comments.css'
import { AiOutlineSend } from 'react-icons/ai'
import logo from '../dc.png'
import './Comments.css'
function Comments() {
  return (
    <div className='comments'>
      <div className='comment-input'>
        <input placeholder='Write your thoughts here...' />
        <div className='send-logo'>
          <AiOutlineSend size={30} />
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
            <p>
              Learn mern stack for full stack development!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
