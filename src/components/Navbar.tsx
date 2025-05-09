import React from 'react'

import { useState } from 'react'




const Navbar = () => {

  

  return (
    <>
    <div className='flex items-center justify-between'>
      <div className="flex flex-shrink-0 items-center">
        <img  className='mx-2 md:w-35 w-24' alt="logo" />
      </div>
      <div className='md:flex space-x-4 text-xl hidden list-none'>
        <li><a href="">Home</a></li>
        <li><a href="" className='text-brandDark'>About Us</a></li>
        <li><a href="" className='text-brandDark'>Flavor</a></li>
        <li><a href="" className='text-brandDark'>Contact</a></li>
      </div>

      <div>
        <li><a href="" className='text-brandBg'>Home</a></li><li><a href=""  className='text-brandBg'>About Us</a></li><li><a href="" className='text-brandBg'>Flavor</a></li><li><a href="" className='text-brandBg'>Contact</a></li>
          
       </div>

    </div>
    </>
  )
}

export default Navbar