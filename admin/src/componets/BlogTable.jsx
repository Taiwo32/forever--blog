import React from 'react'
import { assets } from '../assets/assets'

const BlogTable = ({url,authorImg,title,author,date,deleteBlog,mongoId}) => {
    const BlogDate = new Date(date);
  return (
    <tr className='bg-white'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-5 py-4 font-medium text-blue-700 whitespace-nowrap'>
        <img
          width={40}
          height={40}
          src={authorImg ? authorImg : assets.profile_icon}  // Use authorImg passed from props
          alt={author ? author : "No author"}
        />
            <p>{author?author:"NO author"}</p>
        </th>
        <td className='px-6 py-4'>
            {title?title:"no title"}
        </td>
        <td className='px-6 py-4'>
            {BlogDate.toDateString()}
        </td>
        <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
            x
        </td>
    </tr>
  )
}

export default BlogTable