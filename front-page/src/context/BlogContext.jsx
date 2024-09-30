import { createContext, useEffect, useState } from "react";
import { blog_data } from "../assets/assets";
import axios from 'axios'
 

export const BlogContext = createContext();

const BlogContextProvider = (props) => {

    const [blogs, setBlogs] = useState([]);

    const url = 'http://localhost:9000';

    const fetchBlogs = async () => {
        try {
          const response = await axios.get(url + '/api/blog/list');
          setBlogs(response.data.data); // Ensure this matches your response structure
        //   console.log('Full Response', response);
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      };
      

    useEffect(()=>{
        // console.log('fetching blogs...');
        fetchBlogs();
    },[])

    const value = {
        blog_data,
        blogs,setBlogs,
        fetchBlogs,
        url,
    }

    return (
        <BlogContext.Provider value={value}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;