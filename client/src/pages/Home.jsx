import React, { useState } from 'react'
import background from '../assets/background.jpg'
import Model from '../components/Model'
import Register from '../components/Register'
import Login from '../components/Login'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const navigate = useNavigate()

  function openSignup() {
    setIsModelOpen(true)
    setIsLogin(false)
  }
  function openLogin() {
    setIsModelOpen(true)
    setIsLogin(true)
  }

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get('http://localhost:3000/chat/user/verify', {
          headers: {
            "Authorization": `Bearer ${window.localStorage.getItem('token')}`,
          },
        })
        console.log(response)
        // alert('yes  ')
        if (response.data.msg === 'success') {
          navigate('/chat')
        }
      } catch (err) {
        console.log(err)
      }
    }

    verifyUser()
  })
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-cover w-2/4 h-[calc(100vh-60px)] rounded-lg flex items-center justify-center' style={{ backgroundImage: `url(${background})` }}>
        <div className='text-center'>
          <h2 className='text-6xl py-3 bg-white bg-opacity font-bold text-gray-700 rounded-lg font-Anek'>🙌Welcome🙌</h2>
          <button className='p-3 hover:bg-blue-800 rounded-lg mt-2 bg-blue-600 text-white text-3xl font-bold'
            onClick={() => setIsModelOpen(true)}>Login / Register</button>
        </div>
      </div>
      <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? <Login openSignup={openSignup} /> : <Register openLogin={openLogin} />}
      </Model>
    </div>
  )
}

export default Home