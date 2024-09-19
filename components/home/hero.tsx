import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] my-40 md:my-0 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(/hero/hero (2).png)` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-[80%] mx-auto">
        <div className="md:w-[50%] text-center md:text-left">
          <h1 className="text-6xl font-bold text-white mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>
            Revolutionize Your <span className="text-subtle-red">Team's Workflow</span>
          </h1>
          <p className="text-xl text-white mb-6" style={{ fontFamily: "Anta, sans-serif" }}>
            Unleash your team's potential with our comprehensive platform. From task tracking to live collaboration and performance analytics, we’ve got it all at an unbeatable price.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button>
              Get Started
            </Button>
            <Button variant="secondary" className=" text-dark-green">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-[50%] mt-8 md:mt-0 flex justify-center">
          <Image src={"/hero/hero1.png"} alt="Hero Image" width={450} height={450} />
        </div>
      </div>
    </div>
  )
}

export default Hero
