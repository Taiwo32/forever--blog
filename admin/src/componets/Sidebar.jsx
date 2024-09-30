import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-[#4e4eb1] min-h-screen pl-[4vw] '>
        <img src={assets.logo2} alt="" className='mt-5 w-[max(10vw,100px)] hidden sm:block'/>
        <img src={assets.logo_small} className='mt-5 w-[max(10vw,100px)] mr-5 sm:hidden block' alt="" />
        <div className='flex flex-col gap-5 mt-10'>

            <NavLink to='/add-blog' className='flex items-center gap-2.5 text-gray-500 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#000080] text-sm font-medium '>
                <img src={assets.add_icon} className='w-5' alt="" />
                <p className='hidden sm:block'>Add Blog</p>
            </NavLink>

            <NavLink to='/list' className='flex items-center gap-2.5 text-gray-500 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#000080] text-sm font-medium '>
                <img src={assets.blog_icon} className='w-5' alt="" />
                <p className='hidden sm:block'>Blog List</p>
            </NavLink>

            <NavLink to='/user' className='flex items-center gap-2.5 text-gray-500 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#000080] text-sm font-medium '>
                <img src={assets.email_icon} className='w-5' alt="" />
                <p className='hidden sm:block'>Blog User</p>
            </NavLink>

        </div>
    </div>
  )
}

export default Sidebar