import React from 'react';
import Navbar from './Components/Navbar';
import './style/homepage.css';
import LeftBody from './Components/LeftBody';
import MainBody from './Components/MainBody';
import RightBody from './Components/RightBody';

function HomePage() {
  return (
    <div className='homepage'>
      <Navbar />
      <div className='body'>
        <LeftBody/>
        <MainBody/>
        <RightBody/>
      </div>
    </div>
  )
}

export default HomePage
