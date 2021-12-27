import React from 'react';
import './RightBody.css';
import { useSelector } from 'react-redux';
import SmallCard from './SmallCard';
import {Link} from 'react-router-dom';

function RightBody() {
  const cards = useSelector((state) => state.allCards.cards)
  const renderSmallCards = cards.map((card) => {
    const { name, email, skills, imagepath, aboutMe, _id } = card
    return <SmallCard card={card}/>
  })
  return (
    <div className='rb'>
      <div className='rb-body'>
        <div className='rb-body-space'>
          <h3 className='rb-body-space-heading'>Card Holders</h3>
        </div>
        {renderSmallCards}
      </div>
    </div>
  )
}

export default RightBody
