import React from 'react'
import { assets } from '../assets/assets'
import Subscribe from '../components/Subscribe'

const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 border-t'>
            <h1>Contact Us</h1>
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
            <img className='w-full md:max-w-[350px] ' src={assets.blog} alt="" />
            <div className='flex flex-col justify-center items-start gap-6'>
                <p className='font-semibold text-xl text-blue-950'>Our Office</p>
                <p className='text-blue-950'>4707, Dutch mill road <br /> suit 45, new field New Jersey, USA</p>
                <p>Tel: (234) 80 2140 9208 <br />admin@forever.com</p>
                <p className='font-semibold text-xl text-blue-950'>Careers at Forever</p>
                <p className='text-blue-950'></p>
                <p className=''>Learn more about our teams and job openings</p>
                <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>

            </div>

        </div>
        <Subscribe />
    </div>
  )
}

export default Contact