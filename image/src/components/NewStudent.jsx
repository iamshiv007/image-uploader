import React, { useState } from 'react'
import ProfileIcon from '../assets/images/ProfileIcon.svg'
import './NewStudent.css'

const NewStudent = () => {
  const [avatar, setAvatar] = useState(ProfileIcon);

  const selectImage = (e) => {
    const file = e.target.files[0]
    const  reader = new FileReader()

    reader.onloadend = () => {
      const base64String = reader.result
      setAvatar(base64String)
      console.log(base64String)
    }

    reader.readAsDataURL(file)
  }
  return (
    <div className='container'>
      <form className='p-4 w-50 m-auto'>
      <h2>New Student</h2>
        <label>Name</label>
      <input class="form-control mb-2" type="text" placeholder="Name"/>
      <label>Birthday</label>
      <input class="form-control mb-2" type="text" placeholder="Birthday"/>
      <label style={{display:"block"}} htmlFor="">Avatar</label>
      <label className='mb-4'  htmlFor='avatar'><img htmlFor='avatar' src={avatar} alt="" /></label>
      <input onChange={selectImage} style={{display:"none"}} id='avatar' class="form-control mb-2" type="file" placeholder="Avatar"/>
      <button style={{display:"block"}} className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default NewStudent