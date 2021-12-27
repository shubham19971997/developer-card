import React, { useState, useEffect } from 'react'
import {
  FaHome,
  FaAddressCard,
  FaInfoCircle,
  FaSignOutAlt,
} from 'react-icons/fa'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../dc.png'
import { useSelector } from 'react-redux'

function Navbar() {
  const [show, setShow] = useState(true)

  const card = useSelector((state) => state.myCard)
  const { imagepath } = card

  const controllNavbar = () => {
    if (window.scrollY > 60) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controllNavbar)
    return () => {
      window.removeEventListener('scroll', controllNavbar)
    }
  }, [])

  return (
    <div className={`navbar ${!show && 'nav_blue'}`}>
      <img src={logo} alt='logo' />
      <Link to='/home'>
        <FaHome className='icon' size={25} />
      </Link>
      {/* <span>Home</span> */}
      <Link to='/card'>
        <FaAddressCard className='icon' size={25} />
      </Link>
      {/* <span>My Card</span> */}
      <Link to='/about'>
        <FaInfoCircle className='icon' size={25} />
      </Link>
      <img src={imagepath} className='img-profile' />
      <Link to='/'>
        <FaSignOutAlt className='icon' size={25} />
      </Link>
      {/* <span>Logout</span> */}
    </div>
  )
}

export default Navbar
