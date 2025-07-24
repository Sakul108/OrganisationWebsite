import React, { useEffect, useRef } from 'react'

const Form = () => {
    const inputref=useRef()
    useEffect(()=>{
        inputref.current.focus()
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`you typed:${inputref.current.value}`)
        inputref.current.value=""
        inputref.current.focus();
    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-500 p-4'>
        
    
    <form onSubmit ={handleSubmit} className='bg-yellow shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm'>
        <h2 className='text-xl font-demibold mb-4 text-gray-400'>Auto focused info Form</h2>
        <input
        className='w-full px-4 py-2 border border-blue-300 rounded mb-4 focus:outline:none focus:ring-2 focus:ring-blue-500'
         ref= {inputref} type="text" placeholder=' Jay ho' />
        <button
        className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition' type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Form