import FaQ from '@/components/pricing/faq'
import Prices from '@/components/pricing/price'
import React from 'react'

const Pricing = () => {
  return (
    <div className='min-h-[90vh]'>
      <Prices />
      <FaQ />
    </div>
  )
}

export default Pricing