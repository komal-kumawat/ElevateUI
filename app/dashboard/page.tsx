import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const page = () => {
    return (
        <div className='w-[100vw] h-[100vh] border-1 border-gray-800 border-y-0 flex flex-col'>
            <Navbar />
            <div className='flex mt-10 h-[calc(100vh-20px)]'>
                <div className='w-[20%] h-full overflow-y-auto'>
                    <Sidebar />

                </div>
                <div className='w-[80%] h-full overflow-y-auto'>
                     <Main />

                </div>
            </div>
        </div>

    )
}

export default page
