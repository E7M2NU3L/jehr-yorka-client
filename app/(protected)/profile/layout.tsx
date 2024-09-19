import Navbar from '@/components/navbar/navbar'
import React from 'react'

const Profile = ({children} : {children : React.ReactNode} ) => {
  return (
    <div className='min-h-screen bg-gradient-to-tr from-dark-black via-dark-black/90 to-dark-black'>
        <Navbar />
        <section className='flex flex-row w-[90%] min-h-[90vh]'>
            {children}
        </section>
    </div>
  )
}

export default Profile