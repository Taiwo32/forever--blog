import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) =>{
        event.preventDefault();
        
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-blue-950'>Subscribe now </p>
        <p className='text-blue-950 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis, libero voluptatem culpa id iusto beatae repellendus ad reiciendis laboriosam perspiciatis ea, in, veritatis quaerat recusandae. Modi amet adipisci quod?
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none text-blue-950' type="email" placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox