import Image from 'next/image'
import React from 'react'
import HeroImg from '../../public/hero/hero1.png'
import Hero2 from '../../public/hero/hero (2).png'
import Hero3 from '../../public/hero/hero (3).png'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className='min-h-[90vh] w-full flex justify-center items-center flex-col md:flex-row'>
      <section className='w-[50%] relative'>
        <Image src={Hero2} alt='' width={450} height={400} className='absolute top-[-20vh] left-[-20vh]' />
        <Image src={HeroImg} alt='' width={400} height={400} className='relative' />
        <Image src={Hero3} alt='' width={300} height={300} className='absolute bottom-[-20vh] right-[20vh]' />      
      </section>

      <section className='w-[50%] relative md:px-[3rem] px-[1rem]'>
        <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>
          Elevate Your <span className='text-subtle-red ps-2'>Workplace</span> Productivity with <span className='px-2 text-dark-green'>Quizero</span>
        </h1>
        <p className="text-xl mb-6" style={{ fontFamily: "Anta, sans-serif" }}>
          Experience seamless collaboration, efficient task management, and real-time communication with our all-in-one workplace productivity platform. Empower your team to achieve more together.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button>
            Get Started
          </Button>
          <Button variant='secondary'>
            Learn More
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Hero