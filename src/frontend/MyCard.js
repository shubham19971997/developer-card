import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import RightBody from './Components/RightBody'
import './style/MyCard.css'
import { useSelector } from 'react-redux'
import Card from './Components/Card'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { HiAnnotation } from 'react-icons/hi'
import Comments from '../frontend/Components/Comment'
import { MdUpdate } from 'react-icons/md'
import UpdateForm from './Components/UpdateForm'

function MyCard() {
  const [update, setUpdate] = useState(false)
  const [like, setLike] = useState(false)
  const [comment, setComment] = useState(false)
  const card = useSelector((state) => state.myCard)
  const { name, email, skills, aboutMe, imagepath, _id, comments } = card

  const commentData = {
    cardId: _id,
    comments,
  }

  return (
    <div className='mycard'>
      <Navbar />
      <div className='mycard-body'>
        <div className='mb' key={_id}>
          <div className='card'>
            <div class='div-1'>
              <img className='img-1' alt='logo' src={imagepath} />
              <div className='Name_Post'>
                <p className='name'>{name}</p>
                <p className='designation'>Software Developer</p>
              </div>
            </div>
            <div className='content'>
              <div className='div-2'>
                <p className='heading'>Email</p>
                <p className='data'>{email}</p>
              </div>
              <div className='div-3'>
                <p className='heading'>Skills</p>
                <p className='data'>{skills}</p>
              </div>
              <div className='div-4'>
                <p className='heading'>About</p>
                <p className='data'>{aboutMe}</p>
              </div>
            </div>
            <div className='interactor'>
              <div>
                {like ? (
                  <AiOutlineStar
                    className='like'
                    size={30}
                    onClick={() => setLike(!like)}
                  />
                ) : (
                  <AiFillStar
                    className='like'
                    size={30}
                    onClick={() => setLike(!like)}
                  />
                )}
              </div>
              <div>
                <HiAnnotation
                  className='comm'
                  onClick={() => {
                    setUpdate(false)
                    setComment(!comment)
                  }}
                  size={30}
                />
              </div>
              <div>
                <MdUpdate
                  className='comm'
                  size={30}
                  onClick={() => {
                    setComment(false)
                    setUpdate(!update)
                  }}
                />
              </div>
              <div></div>
            </div>
          </div>
          <div>{comment ? <Comments commentData={commentData} /> : ''}</div>
          <div>{update ? <UpdateForm /> : ''}</div>
        </div>
        <RightBody className='mycard-body-main-rb' />
      </div>
    </div>
  )
}

export default MyCard
