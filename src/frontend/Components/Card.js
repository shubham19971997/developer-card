import React, { useState, useEffect } from 'react'
import './MainBody.css'
import { useSelector } from 'react-redux'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { HiAnnotation } from 'react-icons/hi'
import Comments from './Comment'
import axios from 'axios'

function Card({
  card: {
    name,
    email,
    skills,
    imagepath,
    aboutMe,
    _id,
    likes: initialLikes,
    comments,
  },
}) {
  const [comment, setComment] = useState(false)
  const [like, setLike] = useState(false)
  const User = useSelector((state) => state.myCard)
  // const [totalLikes, setTotalLikes] = useState(likes.length)
  const [likes, setLikes] = useState(initialLikes)

  const cardId = _id

  const commentData = {
    cardId,
    comments,
  }

  const likee = async () => {
    const putData = {
      cardId: _id,
      userId: User._id,
    }
    try {
      const res = await axios.put('http://localhost:9000/card/like', putData)
      if (res.data) {
        setLikes((prev) => [...prev, User._id])
        setLike(true)
      }
    } catch (error) {
      alert('Post already liked')
    }
  }

  const notLikee = () => {
    const putData = {
      cardId: _id,
      userId: User._id,
    }
    axios.put('http://localhost:9000/card/unlike', putData).then((res) => {
      // setTotalLikes(res.data.likes.length)
      const tempLikes = [...likes]
      const index = tempLikes.findIndex((like) => like === User._id)
      tempLikes.splice(index, 1)
      setLikes(tempLikes)
      setLike(false)
    })
  }

  // useEffect(() => {
  //   if (likes.includes(User._id)) {
  //     setLike(true)
  //   }
  // },[])

  return (
    <div className='mb' key={_id}>
      <div className='card'>
        <div className='div-1'>
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
          <div className='interactor-totalLikes'>{likes.length}</div>
          <div className='interactor-likes'>
            {like || likes.includes(User._id) ? (
              <AiFillStar
                className='like'
                size={30}
                onClick={() => {
                  notLikee()
                }}
              />
            ) : (
              <AiOutlineStar
                className='like'
                size={30}
                onClick={() => {
                  likee()
                }}
              />
            )}
          </div>
          <div>
            <HiAnnotation
              className='comm'
              onClick={() => setComment(!comment)}
              size={30}
            />
          </div>

          <div></div>
        </div>
      </div>
      <div>{comment ? <Comments commentData={commentData} /> : ''}</div>
    </div>
  )
}

export default Card
