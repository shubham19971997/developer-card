import React from 'react'
import './SmallCard.css'

function SmallCard({ card: { name, email, skills, imagepath, aboutMe, _id,likes } }) {
  return (
    <div className='smallCard'>
      <div className='smallCard-container'>
        <img className='smallCard-img' src={imagepath} />
        <div className='smallCard-content'>
          <h4 className='smallCard-content-name'>{name}</h4>
          <h5 className='smallCard-content-likes'>Likes {likes.length}</h5>
        </div>
      </div>
    </div>
  )
}

export default SmallCard
