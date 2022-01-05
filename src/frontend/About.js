import React from 'react'
import Navbar from './Components/Navbar'
import './style/About.css'
import lowerImg from '../frontend/images/yoga-coder.png'
import topImg from '../frontend/images/yoga-coder-otherstuff.png'
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

function About() {
  return (
    <div className='about'>
      <Navbar />
      <div className='about-main'>
        <div className='left-part-content'>
          <h1 className='left-part-content-name'>Shubham Sikarwar</h1>
          <p className='left-part-content-description'>
            Looking for scholarships for high school seniors? You’ve come to the
            right place! This handy guidebook will give you all the information
          </p>
          <h4 className='left-part-content-heading-skills'>Skills</h4>
          <p className='left-part-content-description'>React.JS,Node.JS,Redux,Mongoose,Node.JS</p>
          <h4 className='left-part-content-heading'>Contact Me</h4>
          <div className='left-part-logo'>
            <a href="https://www.facebook.com/shubham.sikarwar.560" className="left-part-link">
              <BsFacebook className='socialMedia-logo' size={25} />
            </a>
            <a href="https://www.linkedin.com/in/shubham-sikarwar-6085b3163/" className="left-part-link">
              <BsLinkedin className='socialMedia-logo' size={25} />
            </a>
            <a href='https://github.com/shubham19971997' className="left-part-link">
              <BsGithub className='socialMedia-logo' size={25} />
            </a>
            <a href="https://www.instagram.com/shubham_raahi/" className="left-part-link">
              <BsInstagram className='socialMedia-logo' size={25} />
            </a>
          </div>
        </div>
        <div className='right-part-img'>
          <img src={topImg} className='top-img' />
          <img src={lowerImg} className='lower-img' />
        </div>
      </div>
    </div>
  )
}

export default About
