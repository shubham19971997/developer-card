import React, { useState } from 'react'
import './style/signup.css'
import logo from './dc.png'
import { FaEye } from 'react-icons/fa'
import axios from 'axios'
import login from './login'
import { Link } from 'react-router-dom'

function Signup() {
  const [toggle, setToggle] = useState(false)
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [skills, setSkills] = useState('')
  const [aboutMe, setAboutMe] = useState('')
  const [selectFile, setSelectFile] = useState('')

  const uploadImage = (files) => {
    const formData = new FormData()
    formData.append('file', files[0])
    formData.append('upload_preset', 't1mg5ruv')
    axios
      .post('https://api.cloudinary.com/v1_1/daxavsasf/image/upload', formData)
      .then((res) => {
        setSelectFile(res.data.secure_url);
      })
  }

  function submit(e) {
    e.preventDefault()
    const postData = {
      userName,
      email,
      password,
      skills,
      aboutMe,
      selectFile,
    }
    axios.post('http://localhost:9000/card/signup', postData).then((res) => {
      console.log(res.data)
    })
  }



  return (
    <div className='signup'>
      <div className='container-signup'>
        <img src={logo} className='logo-signup' />
        <form className='form-signup' onSubmit={(e) => submit(e)}>
          <label className='label-signup'>User Name</label>
          <input
            className='input-signup'
            value={userName}
            placeholder='Enter your Name'
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className='label-signup'>Email</label>
          <input
            className='input-signup'
            placeholder='Enter your email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className='label-signup'>Password</label>
          <div className='input'>
            <input
              className='inner-input'
              placeholder='Enter your password'
              type={toggle ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaEye className='icon' onClick={() => setToggle(!toggle)} />
          </div>
          <label className='label-signup'>Skills</label>
          <input
            className='input-signup'
            placeholder='Enter your Skills here'
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <label className='label-signup'>About Me</label>
          {/* <input className='input-signup-about input-signup' placeholder="Write something about yourself" size="40"/>  */}
          <textarea
            className='input-signup-about input-signup'
            placeholder='Write something about yourself'
            type='text'
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          ></textarea>
          <label className='label-signup'>Upload Profile Pic</label>
          <input
            type='file'
            name='file'
            className='profile-signup'
            onChange={(e) => uploadImage(e.target.files)}
          />
          <div>
            <button className='btn-signup' type='submit'>
              Signup
            </button>
            <Link to='login'>
              <a className='login-route'>Already a User</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
