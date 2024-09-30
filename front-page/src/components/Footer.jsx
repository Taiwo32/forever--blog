import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row border-b mb-10 items-center'>
        <img src={assets.logo2} alt="" className='w-20' />
        <p className='text-sm text-white'>All right reserved. Copyright @ForeverBlog</p>
        <div className='flex w-1/5'>
            <img src={assets.facebook_icon}  alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.googleplus_icon} alt="" />
        </div>
    </div>
  )
}

export default Footer