import React from 'react'
import BlogTable from '../componets/BlogTable'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { url } from '../App'
import { toast } from 'react-toastify'

const ListBlog = ({url}) => {

  const [blogs,setBlogs] = useState([]);

  const fetchBlogs = async () =>{
    const response = await axios.get(`${url}/api/blog/list`);
    setBlogs(response.data.data)
  }

  const deleteBlog = async (mongoId) =>{
    const response = await axios.post(`${url}/api/blog/remove`,{id:mongoId})
    await fetchBlogs();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else{
      toast.error('Error')
    }
  }

  useEffect(()=>{
    fetchBlogs()
  },[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>

      <h1>All blogs</h1>
      <div className='relative h-[80vh] max-w[850px] overflow-x-auto mt-4 border border-blue-800 scrollbar-hide'>
          <table className='w-full text-sm text-blue-500'>
            <thead className='text-sm text-white bg-blue-950 text-left uppercase '>
              <tr>
                <th scope='col' className='hidden sm:block px-6 py-3'>
                    Author name
                </th>
                <th scope='col' className=' px-6 py-3'>
                    Blog Title
                </th>
                <th scope='col' className=' px-6 py-3'>
                    Date
                </th>
                <th scope='col' className=' px-6 py-3'>
                    Action
                </th>
              </tr>

            </thead>
            <tbody>
              {blogs.map((item,index)=>{
                return <BlogTable key={index} mongoId={item._id} title={item.title} author={item.author} authorImg={`${url}/uploads/${item.authorImg}`} date={item.date} deleteBlog={deleteBlog}/>
              })}
              
            </tbody>
          </table>
      </div>

    </div>
  )
}

export default ListBlog