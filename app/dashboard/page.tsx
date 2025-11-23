import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-[100vw] h-[100vh] border-1 border-gray-800 border-y-0'>
        <Navbar/>
        <div className='z-10 flex items-center h-[200vh'>
            <div className='w-[18%] h-[100vh] border-r-1 border-gray-800 py-[60px] flex  justify-center sticky'>
                page
            </div>
            <div className='w-[80%]'>
                hello 
            </div>
        </div>
        <div className='z-10 flex items-center h-[200vh'>
            <div className='w-[18%] h-[100vh] border-r-1 border-gray-800 py-[60px] flex  justify-center sticky'>
                page
            </div>
            <div className='w-[80%]'>
                hello 
            </div>
        </div>
     
    </div>
    
  )
}

export default page
