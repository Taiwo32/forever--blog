import React from 'react'
import Hero from '../components/Hero'
import Swipper from '../components/Swipper'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Hero />
        <Swipper />
        <BlogList />
        <Footer />
    </div>
  )
}

export default Home