import React from 'react'
import { assets } from '../assets/assets'
import Subscribe from '../components/Subscribe'

const About = () => {
  return (
    <div>
        
        <div className='text-2xl text-center pt-8 border-t'>
            <h1>About Us</h1>

        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[350px] sm:max-w-[200px]' src={assets.blog} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-blue-950'>
                <p>Forever blog was born out of a passion for innovation and a desire to revolution the way people read online. Our journey began with simple idea: to provide a platform users can easily discover, explore a wide range of information from the comfort of their homes.</p>
                <p>Since our inception, we've worked tirelessly to curate a diverse selection of information that cater to every taste and preference. From lifestyle and technology to startups and home essentials, we offer an extensive information sourced from trusted origins.</p>
                <b className='text-gray-800'> Our Mission</b>
                <p>Our mission at Forever Blog is to Ensure users with right information , convenience, and confidence. We're dedicated to providing a seamless user experience that exceeded expectations,for browsing verified information </p>
            </div>
        </div>
        <div className='text-4xl py-4'>
            <h1>Why Choose Us</h1>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance</b>
                <p className='text-blue-950'>We meticulously select our information to ensure it meet out the right audience </p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-blue-950'>With our user-friendly interface, information are being put in the right category. </p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer service</b>
                <p className='text-blue-950'>Our team of dedicated professional is here to assist you the way, ensuring your satisfaction is our top priority</p>
            </div>
        </div>
        <Subscribe />
    </div>
  )
}

export default About