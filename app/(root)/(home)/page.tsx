import Faq from '@/components/home/faq'
import Features from '@/components/home/features'
import Hero from '@/components/home/hero'
import Main from '@/components/home/main'
import Marketing from '@/components/home/marketing'
import Testimonials from '@/components/home/testimonials'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Hero />
        <Features />
        <Marketing />
        <Main />
        <Faq />
        <Testimonials />
    </div>
  )
}

export default Home