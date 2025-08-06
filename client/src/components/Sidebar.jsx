import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ setChats, setchatInitiated, setReceiverId }) => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    const handleLogout = () =>{
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('userId')
        navigate('/')
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await axios.get('http://localhost:3000/chat/users', {
                    headers: {
                        "Authorization": `Bearer ${window.localStorage.getItem('token')}`,
                    },
                })
                setUsers(users.data)
                // console.log(users)
            } catch (err) {
                navigate('/')
                console.log(err)
            }
        }
        fetchUsers()
    }, [])

    async function startChat(id) {
        try {
            const response = await axios.get('http://localhost:3000/chat/message/read/' + id,
                {
                    headers: {
                        "Authorization": `Bearer ${window.localStorage.getItem('token')}`,
                    },
                }
            )
            setChats(response.data)
        } catch (err) {
            if(err.response.data.message === 'Not Found'){
                setChats([])
            }
            console.log(err)
        }
        // socket.emit('join', id)
        setchatInitiated(true)
        setReceiverId(id)
    }

    return (
        <div className='w-1/4 bg-gray-800 p-4 relative'>
            <input type="text" placeholder='Search' className='w-full p-2 mb-4 border rounded' />
            {users.length > 0 ? (
                <div className='space-y-4'>
                    {users.map((user) => (
                        <div key={user._id}
                            onClick={() => startChat(user._id)}
                            className='flex items-center space-x-4 p-2 hover:bg-gray-300 cursor-pointer'>
                            <img src={`http://localhost:3000/images/${user.image}`} alt='User Image' className='w-10 h-10 rounded-full border' />
                            <span className='text-white text-sm font-bold'>{user.username}</span>
                        </div>
                    ))}
                </div>
            )
                :
                (<div className='text-white font-bold'>
                    <p>No Users</p>
                </div>)
            }
            <button onClick={handleLogout} className='bottom-1 right-1 left-1 rounded hover:bg-blue-700 bg-blue-500 text-white p-2 absolute'>Logout</button>

        </div>
    )
}

export default Sidebar