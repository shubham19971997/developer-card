import React, { useState, useEffect } from 'react'
import logo from './dc.png'
import './style/login.css'
import { Link, Redirect } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setAllCards, setMyCard } from '../redux/actions/cardActions'

function Login() {
  const [toggle, setToggle] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [data, setData] = useState()
  const [token, setToken] = useState('')
  const [err, setErr] = useState('')

  function submit(e) {
    e.preventDefault()
    const postData = {
      email,
      password,
    }

    axios
      .post('http://localhost:9000/card/login', postData)
      .then((res) => {
        if (res.statusText === 'OK') {
          setToken(res.data.token)
          setData(res.data.user)
          setLoggedIn(true)
          console.log(res)
        }
      })
      .catch((err) => {
        setErr('Check Your Email or Password Once')
      })
  }

  const cards = useSelector((state) => state)
  const dispatch = useDispatch()

  const FetchCards = async () => {
    if (loggedIn) {
      console.log(loggedIn)
      const response = await axios
        .get('http://localhost:9000/card/', {
          headers: {
            token: token,
          },
        })
        .catch((err) => {
          console.log(err)
        })
      dispatch(setAllCards(response.data))
    }
  }

  useEffect(() => {
    dispatch(setMyCard(data))
  }, [data])

  useEffect(() => {
    if (loggedIn) {
      FetchCards()
    }
  }, [loggedIn])

  localStorage.setItem('token', token)

  return (
    <div className='login'>
      <div className='container'>
        <img src={logo} className='logo' alt='logo' />
        <form className='form' onSubmit={(e) => submit(e)}>
          <label className='label'>Email</label>
          <input
            name='email'
            className='input-Email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setErr('')
            }}
            placeholder='Enter your email'
          />
          <label className='label'>Password</label>
          <div className='input-password'>
            <input
              name='password'
              className='inner-input'
              placeholder='Enter your password'
              type={toggle ? 'text' : 'password'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setErr('')
              }}
            />
            {toggle ? (
              <FaEye className='icon' onClick={() => setToggle(!toggle)} />
            ) : (
              <FaEyeSlash className='icon' onClick={() => setToggle(!toggle)} />
            )}
          </div>

          <button className='btn' type='submit'>
            Login
          </button>
        </form>
        {loggedIn ? <Redirect to={{ pathname: '/home' }} /> : ''}
        <p className='user-register'>
          new user?
          <span>
            <Link to='/signup'>Register here</Link>
          </span>
        </p>
        {err === '' ? (
          ''
        ) : (
          <div className='alert'>
            <p className='alert-text'>{err}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
