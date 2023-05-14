import React, { useState } from 'react'
import ProfileIcon from '../assets/images/ProfileIcon.svg'
import './NewStudent.css'
import axios from 'axios'

const NewStudent = () => {
  const [avatar, setAvatar] = useState(ProfileIcon);
  const [formData, setFormData] = useState({})

  const selectImage = (e) => {
    setFormData({...formData, [e.target.name]:e.target.files[0]})

    const file = e.target.files[0]
    const  reader = new FileReader()

    reader.onloadend = () => {
      const base64String = reader.result
      setAvatar(base64String)
    }

    reader.readAsDataURL(file)
  }

  const collectData = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const submitForm = (e) => {
    e.preventDefault()
    const formData0 = new FormData()

    formData0.append("name", formData.name)
    formData0.append("birthday", formData.birthday)
    formData0.append('avatar', formData.avatar)

    axios.post('http://localhost:12000/api/student/new', formData0)
    .then((student) => console.log(student))
    .catch((err) => console.log(err))
  }
  return (
    <div className='container'>
      <form onSubmit={submitForm} encType='multipart/form-data' className='p-4 w-50 m-auto'>
      <h2>New Student</h2>
        <label>Name</label>
      <input onChange={collectData} name='name' className="form-control mb-2" type="text" placeholder="Name"/>
      <label>Birthday</label>
      <input onChange={collectData} name='birthday' className="form-control mb-2" type="text" placeholder="Birthday"/>
      <label style={{display:"block"}} htmlFor="">Avatar</label>
      <label className='mb-4' htmlFor='avatar'><img className='student' htmlFor='avatar' src={avatar} alt="" /></label>
      <input accept='.png, .jpg, .jpeg' name='avatar' onChange={selectImage} style={{display:"none"}} id='avatar' className="form-control mb-2" type="file" placeholder="Avatar"/>
      <button type='submit' style={{display:"block"}} className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default NewStudent