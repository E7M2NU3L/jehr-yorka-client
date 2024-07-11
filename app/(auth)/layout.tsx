import Navbar from '@/components/navbar/navbar'
import React from 'react'

const Auth = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='bg-dark-black'>
        <Navbar />
        {children}
    </div>
  )
}

export default Auth