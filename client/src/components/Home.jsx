import React, { useState } from 'react'
import background from '../assets/peakpx.jpg'
import Model from './Model'
import Login from './Login'
import Register from './Register'

const Home = () => {
    const [isModelOpen, setIsModelOpen] = useState(true)
    const [isLogin, setIsLogin] = useState(true)

    function openSignup(){
      setIsModelOpen(true)
      setIsLogin(false)
    }
    function openLogin(){
      setIsModelOpen(true)
      setIsLogin(true)
    }
  return (
    <div className='flex items-center justify-center bg-gray-400'>
        <div className='text-center'>
            <h2 className='font-bold text-gray-700 bg-white text-6xl py-3'>Welcome</h2>
            <button onClick={()=>setIsModelOpen(true)} className='p-3 bg-blue-600 text-white hover:bg-blue-800 rounded-2xl'>Login / Signup</button>
        </div>
        <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
          {isModelOpen ? <Login /> : <Register />}
        </Model>
    </div>
  )
}

export default Home