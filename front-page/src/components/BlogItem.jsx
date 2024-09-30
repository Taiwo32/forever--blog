import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const BlogItem = ({title,description,category,image,id}) => {
  // console.log('Blog Item Image:', image);

  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-blue-600 border border-black hover:shadow-[7px_7px_0px_#000080]'>
        <Link to={`/blog/${id}`}>
          {image ? (
            <img src={image} alt="" className='border-b border-black' />
          ) : (
            <p>NO Images</p>
          
          )}
          
        </Link>
        
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
        <div className='p-5'>
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
            <p className='mb-3 text-sm tracking-tight text-gray-700' dangerouslySetInnerHTML={{__html:description.slice(0,120)}}>

            </p>
            <Link to={`/blog/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
                Read More <img src={assets.arrow} alt="" className='ml-2' />
            </Link>
        </div>
    </div>
  )
}

export default BlogItem