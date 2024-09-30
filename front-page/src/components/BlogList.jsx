import React, { useContext, useEffect, useState } from 'react'
import { blog_data } from '../assets/assets'
import BlogItem from './BlogItem'
import { BlogContext } from '../context/BlogContext';


const BlogList = () => {

    const [menu,setMenu] = useState('All');
    const { blogs,url } = useContext(BlogContext);

    useEffect(()=>{
        // console.log(blogs);
    },[blogs])

  return (
    
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={()=>setMenu('All')} className={menu==="All"?'bg-black text-white py-1 px-4 rounded-sm':''}>All</button>
            <button onClick={()=>setMenu('Technology')} className={menu==="Technology"?'bg-black text-white py-1 px-4 rounded-sm':''}>Technology</button>
            <button onClick={()=>setMenu('Startup')} className={menu==="Startup"?'bg-black text-white py-1 px-4 rounded-sm':''}>Startup</button>
            <button onClick={()=>setMenu('Lifestyle')} className={menu==="Lifestyle"?'bg-black text-white py-1 px-4 rounded-sm':''}>LifeStyle</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {
                blogs && blogs.filter((item)=> menu==="All"?true:item.category===menu).map((item,index)=>{
                    const imageURL = `${url}/uploads/${item.image}`;
                    // console.log('Image URL:', imageURL);
                    return <BlogItem key={index} id={item._id} image={imageURL} title={item.title} description={item.description} category={item.category}/>
                })
            }
        </div>

    </div>
  )
}

export default BlogList