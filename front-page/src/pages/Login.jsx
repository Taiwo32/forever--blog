import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [currentState, setCurrentState] = useState('Sign up');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const url = currentState === 'login' 
                ? 'http://localhost:9000/api/user/login' 
                : 'http://localhost:9000/api/user/signup';
            
            const payload = currentState === 'login' 
                ? { email, password } 
                : { userName, email, password };

            const response = await axios.post(url, payload);
            
            localStorage.setItem('token', response.data.token); // Store the token
            setError('');
            navigate('/'); // Redirect to blogs after login/signup
        } catch (err) {
            setError('Login/Signup failed. Please check your credentials.');
        }
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
                <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                    <p className='prata-regular text-3xl'>{currentState}</p>
                    <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
                </div>
                {currentState === 'login' ? '' : (
                    <input 
                        type="text" 
                        className='w-full px-3 py-2 border border-gray-800' 
                        placeholder='Name' 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required 
                    />
                )}
                <input 
                    type="email" 
                    className='w-full px-3 py-2 border border-gray-800' 
                    placeholder='Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <input 
                    type="password" 
                    className='w-full px-3 py-2 border border-gray-800' 
                    placeholder='Password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />
                {error && <p className="text-red-500">{error}</p>}
                <div className='w-full flex justify-between text-sm mt-[8px]'>
                    <p className='cursor-pointer'>Forgot your password</p>
                    {currentState === 'login'
                        ? <p onClick={() => setCurrentState('Sign up')} className='cursor-pointer'>Create account</p>
                        : <p onClick={() => setCurrentState('login')} className='cursor-pointer'>Login here</p>}
                </div>
                <button className='bg-black text-white font-light px-8 py-2 mt-4'>
                    {currentState === 'login' ? 'Sign In' : 'Sign up'}
                </button>
            </form>
        </div>
    );
}

export default Login;
