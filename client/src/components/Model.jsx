import React from 'react'

const Model = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) return null;
  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50'>
      <div className='relative bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg p-8 w-[90%] max-w-md'>
        <button className='absolute top-4 right-4 text-gray-300 text-3xl'
          onClick={() => setIsModelOpen(false)}>
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

export default Model