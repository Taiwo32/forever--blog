import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './componets/Sidebar';
import Navbar from './componets/Navbar';
import AddBlog from './pages/AddBlog';
import ListBlog from './pages/ListBlog';
import BlogUser from './pages/BlogUser';


export const url = "http://localhost:9000"

const App = () => {


  return (
    <div className='flex items-start min-h-screen'>
        <ToastContainer theme='dark'/>
        <Sidebar />


        <div className='flex-1 h-screen overflow-scroll bg-[#6b6fe0]'>
            <Navbar />

            <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
            <Routes>
              <Route path='/add-blog' element={<AddBlog url={url} />} />
              <Route path='/list' element={<ListBlog url={url}/>} />
              <Route path='/user' element={<BlogUser/>} />
              
            </Routes>
          </div>
        </div>
    </div>
  )
}

export default App