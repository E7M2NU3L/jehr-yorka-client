import About from '@/components/products/about'
import ProductsSection from '@/components/products/products'
import Services from '@/components/products/services'
import React from 'react'

const Products = () => {
  return (
    <div className='min-h-[90vh]'>
      <About />
      <ProductsSection />
      <Services />
    </div>
  )
}

export default Products