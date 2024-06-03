import Dashnav from '@/components/dashboard/dashnav'
import Sidebar from '@/components/dashboard/sidebar'
import React from 'react'

const Dash = ({children} : {children : React.ReactNode} ) => {
  return (
    <div className='flex min-h-screen bg-gradient-to-tr from-dark-black via-dark-black/80 to-subtle-black'>
        <Sidebar />
        <section className='flex flex-col w-[90%] min-h-screen'>
            <Dashnav />
            {children}
        </section>
    </div>
  )
}

export default Dash