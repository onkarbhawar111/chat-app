import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = ({openSignup}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();

    try{
       const response = await axios.post('http://localhost:3000/chat/user/login', {username, password})
       console.log(response)
       if(response.data.msg === 'success'){
        window.localStorage.setItem('token', response.data.token)
        window.localStorage.setItem('userId', response.data.user._id)
        navigate('/chat')
       }
      } catch(err){
        console.log(err)
      }
  }
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700'>Username: </label>
          <input onChange={(e) => setUsername(e.target.value)} type="text" className='w-full px-3 py-2 border' placeholder='Enter username' />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Password: </label>
          <input onChange={(e) => setPassword(e.target.value)} type="text" className='w-full px-3 py-2 border' placeholder='Enter password' />
        </div>
        <div className='mb-4 flex text-center justify-between'>
          <label className='inline-flex items-center'>
            <input type="checkbox" className='form-checkbox' />
            <span className='ml-2 text-gray-700'>Remember Me</span>
          </label>
          <a href="#" className='text-blue-800'>Forgot Password?</a>
        </div>
        <div className='mb-4'>
          <button type='submit' className='w-full bg-blue-600 text-white py-2'>Login</button>
        </div>
      </form>
      <div className='text-center'>
        <span className='text-gray-700'>Don't have an account?</span>
        <button className='text-blue-800' onClick={openSignup}>Sign Up</button>
      </div>
    </div>
  )
}

export default Login