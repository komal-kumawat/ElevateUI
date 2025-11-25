import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className=' font-bold flex flex-col items-center justify-center h-[100vh] w-full'>
          <h1>Tired of look alike designs?</h1>
          
          <Link href="/component">
            <button className='bg-gray-200 p-2 text-gray-900 rounded-md m-5'>
              browse components
            </button>
          </Link>
      </div>
    </div>
  )
}

export default page
