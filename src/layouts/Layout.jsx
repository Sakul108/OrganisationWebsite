import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footers from '../components/Footers'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footers/>
    
    
    </>
  )
}

export default Layout