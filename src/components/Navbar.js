import React from 'react'

const Navbar = () => {
  return (
      <div className='h-[15vh] w-[100%] flex items-center'>
          <div className='logo w-[40%]'></div>
          <div className='nav flex gap-16 justify-end w-[40%]'>
              <a href='#'>DUR COMPETITORS</a>
              <a href='#'>FOR PROFESSIONALS</a>
              <a>CONTACT</a>
          </div>
          <div className='w-[20%] flex justify-center gap-10'>
              <a href='#'>ENG</a>
              <a href='#'>ENG</a>
              <a href='#'>ENG</a>
          </div>
    </div>
  )
}

export default Navbar