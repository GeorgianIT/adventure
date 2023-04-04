import React from 'react'
import Logo from '../assets/adventure_logo.png'
import user from '../assets/icons8-user-48.png'
import search from '../assets/icons8-search-48.png'

const Navbar = () => {
  return (
      <div className='h-[15vh] w-[100%] flex items-center'>
      <div className='logo w-[40%] flex justify-center object-fit'>
        <img src={Logo} className='w-[150px]'/>
          </div>
          <div className='nav flex gap-16 justify-end w-[40%] border-r-2 border-gray-400 pr-20'>
              <a href='#'>DUR COMPETITORS</a>
              <a href='#'>FOR PROFESSIONALS</a>
              <a>CONTACT</a>
          </div>
          <div className='w-[20%] flex justify-center gap-10'>
              <a href='#' className='pt-3'>ENG</a>
              <img src={user} className='scale-[80%]' />
              <img src={search} className='scale-[80%]' />
          </div>
    </div>
  )
}

export default Navbar