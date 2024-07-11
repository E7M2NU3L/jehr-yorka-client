import Navbar from '@/components/navbar/navbar'
import ProfileSide from '@/components/profile/sidebar'
import React from 'react'

const Profile = ({children} : {children : React.ReactNode} ) => {
  return (
    <div className='min-h-screen bg-gradient-to-tr from-dark-black via-dark-black/80 to-subtle-black'>
        <Navbar />
        <section className='flex flex-row w-[90%] min-h-[90vh]'>
            <ProfileSide />
            {children}
        </section>
    </div>
  )
}

export default Profile