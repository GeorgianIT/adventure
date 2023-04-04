import React from 'react'
import campfire from '../assets/campfire.jpg'
import cooking from '../assets/cooking.jpg'
import boots from '../assets/boots.png'
import close from '../assets/icons8-close-48.png'

const Challenges = () => {
  return (
      <div className='h-[110vh] w-[80vw] m-auto pt-20 flex justify-between bg-neutral-200'>
          <div className='challenges flex flex-col gap-10 w-[100vw]'>
              <h1 className='font-bold text-[30px]'>Popular challenges</h1>
              <div className='flex gap-10'>
                  <img src={campfire} className='w-[400px]' />
                  <div>
                    <h2 className='text-red-500 font-bold'>KEY SKILLS</h2>
                    <h1 className='font-bold text-[30px]'>Friction-Based Fire Making</h1>
                      <p className='w-[60%]'>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p> 
                      <div className='flex pt-10 gap-4'>
                          <img src={close} />
                          <p className=' text-[30px]'>Find out more</p>  
                      </div>
                      
                  </div>
                  
              </div>
              <div className='flex gap-10'>
                  <img src={campfire} className='w-[400px]' />
                  <div>
                     <h2 className='text-red-500 font-bold'>KEY SKILLS</h2>
                    <h1 className='font-bold text-[30px]'>Friction-Based Fire Making</h1>
                    <p className='w-[60%]'>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>  
                  <div className='flex pt-10 gap-4'>
                          <img src={close} />
                          <p className=' text-[30px]'>Find out more</p>  
                      </div>
                  </div>
                  
              </div>
              <div className='flex gap-10'>
                  <img src={cooking} className='w-[400px]' />
                  <div>
                    <h2 className='text-red-500 font-bold'>KEY SKILLS</h2>
                    <h1 className='font-bold text-[30px]'>Friction-Based Fire Making</h1>
                    <p className='w-[60%]'>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>  
                  <div className='flex pt-10 gap-4'>
                          <img src={close} />
                          <p className=' text-[30px]'>Find out more</p>  
                      </div>
                  </div>
                  
              </div>
          </div>
          <div className='mission w-[50vw]'>
              <img src={boots} className='scale-[150%] pt-20' />
              <div className='pt-36'>
                    <h2 className='font-bold text-[30px]'>Mission</h2>
                    <h1 className='font-bold text-[20px]'>Lorem ipsum dolor sit amet, conseteur sadipscing elitr, sed diam nonumy temporar.</h1>
                    <p className='w-[60%] pt-6'>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>  
                  <div className='flex pt-4 gap-4'>
                          <img src={close} className='scale-[70%]'/>
                          <p className=' text-[20px] pt-2'>Find out more</p>  
                      </div>
                  </div>
          </div>
    </div>
  )
}

export default Challenges