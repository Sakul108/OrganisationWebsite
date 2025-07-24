//rafce and install react+ esn 
import React from 'react'
import { Link } from 'react-router-dom'

const Footers = () => {
  return (

   <footer style={{ backgroundColor: "#490829" }} className="shadow-sm">


  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a
        href="https://flowbite.com/" 
        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1736532434238-d37771995bd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG90dXMlMjBsb2dvfGVufDB8fDB8fHww"
          className="h-8"
          alt="Lotus Logo"
        />
       <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">

          Devi Sita Foundation
        </span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-white-400">
        <li>
          <Link to="/about" className="hover:underline me-4 md:me-6">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:underline me-4 md:me-6">
            Projects
          </Link>
          </li>
          <li>
          <Link to="/contact" className="hover:underline me-4 md:me-6">
            Contacts
          </Link>
          </li>
           
    
      
        
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2025 {" "}
      <a href="https://flowbite.com/" className="hover:underline">
             SitaFoundation™
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>

  )
}

export default Footers