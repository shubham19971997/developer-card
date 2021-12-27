import React, { useState } from 'react'
import './MainBody.css'
import { useSelector } from 'react-redux'
import Card from './Card'

function MainBody() {
  const cards = useSelector((state) => state.allCards.cards)
  const myCard = useSelector((state) => state.myCard)
  const renderCards = cards.map((card) => {
    const { name, email, skills, imagepath, aboutMe, _id } = card
    if (myCard._id !== _id) return <Card card={card} />
  })
  return <div>{renderCards}</div>
}

export default MainBody
