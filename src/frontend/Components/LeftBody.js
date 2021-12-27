import React, { useEffect } from 'react'
import './LeftBody.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function LeftBody() {
  const card = useSelector((state) => state.myCard)
  const { name, email, skills, aboutMe, imagepath } = card
  return (
    <div className='lb'>
      <div className='lb-top'>
        <div className='lb-top-space'></div>
        <img src={imagepath} className='lb-top-img' />
        <div className='lb-top-content'>
          <div>
            <p className='lb-top-name'>{name}</p>
          </div>
          <div>
            <p className='lb-top-email'>{email}</p>
          </div>
          <div>
            <p className='lb-top-skills'>Skills: {skills}</p>
          </div>
        </div>
        <div className='lb-top-login'>
          <p className='lb-top-login-text'>LoggedIn</p>
        </div>
      </div>
      <div className='lb-bottom'>
        <div className='lb-bottom-space'>
          <h3 className='lb-bottom-heading'>Hot Skills</h3>
        </div>
        <div className='lb-bottom-content'>
          <div className='lb-bottom-content-h2'>
            <h2># React.JS</h2>
          </div>
          <div className='lb-bottom-content-h2'>
            <h2># Node.JS</h2>
          </div>
          <div className='lb-bottom-content-h2'>
            <h2># Angular.JS</h2>
          </div>
          <div className='lb-bottom-content-h2'>
            <h2># MongoDB</h2>
          </div>
          <div className='lb-bottom-content-h2'>
            <h2># Express.JS</h2>
          </div>
          <div className='lb-bottom-content-h2'>
            <h2># React.JS</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBody
