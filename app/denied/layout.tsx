import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

const DeniedLayout = ({children} : {
    children : React.ReactNode
}) => {
  return (
    <div className='bg-dark-black'>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default DeniedLayout