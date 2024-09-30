import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BlogContext } from '../context/BlogContext';
import { assets } from '../assets/assets';
import Footer from '../components/Footer';

const Blog = () => {

    
    const {id} = useParams();
    const {blog_data,blogs,url} = useContext(BlogContext);
    const [data,setData] = useState(null);

    const fetchBlogData = async () =>{
        const blogItem = blogs.find((item)=> item._id.toString() === id);
        if (blogItem){
            setData(blogItem)
        }
    }
    // const fetchBlogData =  () =>{
    //     for(let i=0;i<blog_data.length;i++){

    //         if(blogId.id===blog_data[i].id){
    //             setData(blog_data[i])
    //             break;
    //             console.log(blog_data[i]);
    //         }
    //     }
    // }

    useEffect(()=>{
        fetchBlogData()
    },[id, blogs])

  return (data? <>
    <div className='bg-blue-950 py-5 px-5 md:px-12 lg:px-28'>
        
        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            <img src={`${url}/uploads/${data.authorImg}`} alt="" className='mx-auto mt-6 border border-white rounded-full'/>
            <p className='mt-1 pb-2 text-lg max-w[740px] mx-auto'>{data.author}</p>
        </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px]'>
        <img className='border-4 border-white' src={`${url}/uploads/${data.image}`} alt="" />
        
        <div className='blog-content' dangerouslySetInnerHTML={{__html:data.description}}>

        </div>
       
        <div className='my-24'>
            <p className='text-black font font-semibold my-4'>Share this article on social media</p>
            <div className='flex'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.googleplus_icon} alt="" />
            </div>
        </div>
    </div>
    <Footer />
    </>:<></>
  )
}

export default Blog