import React from 'react'
import Mountains from '../assets/Mountains.mp4'
import Twitter from '../assets/icons8-twitter-48 (1).png'
import Facebook from '../assets/icons8-facebook-64.png'
import Youtube from '../assets/icons8-youtube-logo-50.png'

const FirstSection = () => {
  return (
      <div className='w-[80vw] h-[85vh] m-auto bg-neutral-300 flex'>
          <div className='survive w-[30%] flex'>
              <div className='h-[100%] w-[20%] flex flex-col justify-end'>
                  <div className='flex flex-col gap-0'>
                    <img src={Facebook}  className='scale-[40%]'/>
                    <img src={Twitter}  className='scale-[40%]'/>
                    <img src={Youtube} className='scale-[40%]'/>  
                  </div>
              </div>
              <div className='text-start w-[80%] h-[60%] m-auto'>
                  <div className='flex'>
                        <h1 className='text-red-500 w-[70%] text-[150px] break-words leading-none font-bold'>SURVIVE</h1> 
                  </div>
                
                <p className='w-[80%]'>Lorem Ipsum dolor sit amet, conseteuur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ul labor.</p>   
              </div>
              
          </div>
          <div className='w-[70%] h-[100%]'>
              <video src={Mountains} type="video.mp4" autoPlay muted className='object-cover h-[100%]' />
          </div>
      </div>
      
  )
}

export default FirstSection