import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className=' w-full border-b-2 flex justify-between items-center border-blue-800 px-5 sm:px-12 py-4 text-lg'>
        <p>Admin Panel</p>
        <img className=' w-10' src={assets.profile_icon} alt="" />
    </div>
  )
}

export default Navbar