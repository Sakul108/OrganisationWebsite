import React, { useEffect, useState } from 'react'

const API = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then((data) => {
            setUsers(data)
            setLoading(false)
        })
        .catch((error) => {
            setError(error)
            setLoading(false)
        })
    })


  return (
    <>
    <div>
        <h2 className='text-xl font-semibold md-4'>
                User list
        </h2>
        {users.map((user)=>(
            <div key={user.id} 
            className='border p-2 m-b2 rounded'>
                <h4>{user.name}</h4>
                <p>Email: {user.email}</p>

            </div>

        ))}
    </div>

    
    </>
  )
}

export default API