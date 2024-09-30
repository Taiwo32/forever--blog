import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute'; // For protecting routes

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      {/* Navbar will always be visible */}
      <Navbar />

      {/* Defining the routes */}
      <Routes>
        <Route path='/' element={<Home />} />

        {/* Protect the blog route so that only logged-in users can access it */}
        <Route 
          path='/blog/:id' 
          element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          } 
        />

        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
