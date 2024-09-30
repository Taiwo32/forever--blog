import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { url } from '../App'

const AddBlog = () => {

    const [image, setImage] = useState(false);
    const [authorImg, setAuthorImg] = useState(false);
    const [data, setData] = useState({
        title: "",
        description: "",
        category: "Startup",
        author: "Perry Tee",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }));
        
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('image', image);
        formData.append('authorImg', authorImg);

        const response = await axios.post(`${url}/api/blog/add`, formData);
        if (response.data.success) {
            toast.success(response.data.message)
            setImage(false);
            setAuthorImg(false);
            setData({
                title:"",
                description:"",
                category:"Startup",
                author: "Perry Tee",
            })
            setImage(false);
            setAuthorImg(false);
            toast.success(response.data.message)
        }
        else {
            toast.error(response.data.message)
        }
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
                <p className='text-xl'>Upload thumbnail</p>
                <label htmlFor="image">
                    <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" className=' w-25 h-20 mt-4' />
                </label>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
                <br />
                <p className='text-xl'>Upload Author Image</p>
                <label htmlFor="authorImg">
                    <img src={!authorImg ? assets.upload_area : URL.createObjectURL(authorImg)} alt="" className=' w-25 h-20 mt-4' />
                </label>
                <input onChange={(e) => setAuthorImg(e.target.files[0])} type="file" id='authorImg' hidden required />
                <p className='text-xl mt-4'>Blog title</p>
                <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Type here' required />
                <p className='text-xl mt-4'>Blog description</p>
                <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Write content here' rows={6} required />


                <p className='text-xl mt-4'>Blog category</p>
                <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500' >
                    <option value="Startup">Startup</option>
                    <option value="Technology">Technology</option>
                    <option value="Lifestyle">Lifestyle</option>
                </select>
                <br />
                <button type='submit' className='mt-8 w-40 h-12 bg-blue-900 text-white'>ADD</button>
            </form>

        </div>
    )
}

export default AddBlog