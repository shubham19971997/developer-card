import React from 'react'
import './RightBody.css'
import { useSelector } from 'react-redux'
import SmallCard from './SmallCard'
import { Link } from 'react-router-dom'

function RightBody() {
  const cards = useSelector((state) => state.allCards.cards)
  const { _id } = cards
  let i = 0
  const renderSmallCards = cards
    .map((card) => {
      const { _id } = card
      i++
      if (i < 6) return <SmallCard card={card} key={_id} />
    })
    .reverse()
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
