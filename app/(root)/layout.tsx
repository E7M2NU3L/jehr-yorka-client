import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

const Landing = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='bg-dark-black text-dark-white overflow-x-hidden'>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Landing