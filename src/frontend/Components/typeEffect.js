import React from 'react'
import Typerwriter from 'typewriter-effect'
import './typewriter.css'

function typeEffect({ name }) {
  return (
    <div className='typewriter'>
      <Typerwriter
        options={{
          strings: [name],
          autoStart: true,
          loop: true,
          pauseFor: 900,
          delay: 140
        }}
      />
    </div>
  )
}

export default typeEffect
