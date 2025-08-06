import axios from 'axios'
import React, { useState } from 'react'

const Form = ({receiverId, setChats, chats}) => {
    const [message, setMessage] = useState('')
    const userId = window.localStorage.getItem('userId')
    async function sendMessage(e){
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:3000/chat/message/send/'+receiverId,
                {content: message},{
          headers: {
            "Authorization": `Bearer ${window.localStorage.getItem('token')}`,
          },
        }
            )
            setChats([...chats, {content: message, sender: userId}])
            setMessage('')
        } catch(err){
            console.log(err)
        }
    }
  return (
    <div className='p-4 absolute bottom-0 right-0 left-0 bg-white bg-opacity-20'>
        <form onSubmit={sendMessage} className='flex items-center'>
        <input 
        type="text" 
        placeholder='Enter your msg....' 
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        className='w-full p-2 border rounded-l-lg' />

        <button type='submit' className='p-2 bg-blue-500 text-white rounded-r-lg'>Send</button>
        </form>
    </div>
  )
}

export default Form