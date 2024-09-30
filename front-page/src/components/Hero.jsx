import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border-gray-400 bg-blue-600'>
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-3'>
            <div className=' text-center gap-2'>
                <h1 className='md:text-base'>WELCOME TO FOREVER'S BLOG</h1>
                <h3 className='prata-regular  sm:py-3  leading-relaxed'>News Events,Entertainment, Lifestyle, Fashion, Beauty. Inspiration and Yes.... Gossip! Wink </h3>
            </div>
            
        </div>
        <img className='w-full sm:w-1/2' src={assets.blog}  alt="" />
    </div>
  )
}

export default Hero