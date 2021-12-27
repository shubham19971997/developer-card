import React, { useState } from 'react'
import './UpdateForm.css'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function UpdateForm() {
  const card = useSelector((state) => state.myCard)
  const { name, email, skills, aboutMe, imagepath, _id } = card
  const [userName, setUserName] = useState(name)
  const [newSkills, setNewSkills] = useState(skills)
  const [newAboutMe, setNewAboutMe] = useState(aboutMe)
  const history = useHistory()
  function submit(e) {
    e.preventDefault()
    const updateData = {
      _id,
      userName,
      newSkills,
      newAboutMe,
    }

    axios.put('http://localhost:9000/card/update', updateData).then((res) => {
      if (res.data === 'OK') {
        history.push('/login')
      }
    })
  }

  return (
    <div className='updateForm'>
      <div className='updateForm-content'>
        <div>
          <h1 className='updateForm-heading'>Update Your Card Data</h1>
        </div>
        <form className='updateForm-form' onSubmit={(e) => submit(e)}>
          <label className='updateForm-content-label'>User Name</label>
          <input
            className='updateForm-content-input'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className='updateForm-content-label'>Skills</label>
          <input
            className='updateForm-content-input'
            value={newSkills}
            onChange={(e) => setNewSkills(e.target.value)}
          />
          <label className='updateForm-content-label'>AboutMe</label>
          <input
            className='updateForm-content-input'
            value={newAboutMe}
            onChange={(e) => setNewAboutMe(e.target.value)}
          />
          <button className='updateForm-content-button' type='submit'>
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateForm
