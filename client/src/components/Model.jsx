import React from 'react'

const Model = ({children, isModelOpen, setIsModelOpen}) => {
    if(!isModelOpen) return null
  return (
    <div className='bg-red-900 fixed flex items-center justify-center'>
        <div className='bg-white '>Model</div>
    </div>
  )
}

export default Model