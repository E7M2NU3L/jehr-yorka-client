import React from 'react'
import { Card } from '../ui/card'
import { BriefcaseIcon, CloudIcon, DatabaseIcon, LaptopIcon, ShieldIcon, SmartphoneIcon } from './svgs'
import { MdTransitEnterexit } from 'react-icons/md'
import Link from 'next/link'
import { Button } from '../ui/button'

const Services = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24">
    <div className="container grid gap-6 px-4 md:px-6">
      <div className="space-y-4 text-center">
        <div className="inline-block rounded-lg bg-subtle-red text-dark-white px-3 py-1 text-sm">Services</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-dark-white" style={{
            fontFamily: "Oswald, sans-serif"
        }}>
          Discover Our Comprehensive Offerings
        </h2>
        <p className="mx-auto max-w-[700px] text-dark-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" style={{
            fontFamily: "Anta, sans-serif"
        }}>
          Jehr Tech Solutions provides a wide range of innovative products and services tailored to meet the diverse needs of
          our clients. Explore our comprehensive offerings and let us help you unlock your business potential.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col gap-4 border border-subtle-green hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-dark-green/40 bg-dark-black text-dark-white px-4 py-3">
          <div className="rounded-md p-3 flex items-center justify-center">
            <LaptopIcon className="w-6 h-6 text-primary-foreground" />
          </div>
          <main className='flex w-full justify-between items-center'>
            <h3 className="text-xl font-semibold" style={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: 700
          }}>Web Development</h3>

          <Link href="/">
            <MdTransitEnterexit className='text-dark-white hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out text-2xl' />
          </Link>
          </main>
          <p className="text-dark-white/80" style={{
            fontFamily: "Anta , sans-serif"
          }}>
            Leverage our expertise in web development to build high-performing, responsive, and user-friendly
            websites that drive your online presence.
          </p>
        </Card>
        <Card className="flex flex-col gap-4 border border-subtle-green hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-dark-green/40 bg-dark-black text-dark-white px-4 py-3">
          <div className="rounded-md p-3 flex items-center justify-center">
            <DatabaseIcon className="w-6 h-6 text-primary-foreground" />
          </div>
         <main className='flex w-full justify-between items-center'>
             <h3 className="text-xl font-semibold" style={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: 700
          }}>Data Analytics</h3>

          <Link href="/">
            <MdTransitEnterexit className='text-dark-white hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out text-2xl' />
          </Link>
         </main>
          <p className="text-dark-white/80" style={{
            fontFamily: "Anta , sans-serif"
          }}>
            Unlock the power of your data with our advanced analytics solutions, helping you make informed decisions
            and drive business growth.
          </p>
        </Card>
        <Card className="flex flex-col gap-4 border border-subtle-green hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-dark-green/40 bg-dark-black text-dark-white px-4 py-3">
          <div className="rounded-md p-3 flex items-center justify-center">
            <ShieldIcon className="w-6 h-6 text-primary-foreground" />
          </div>
          <main className='flex w-full justify-between items-center'>
            <h3 className="text-xl font-semibold" style={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: 700
          }}>Ai Solutions</h3>

          <Link href="/">
            <MdTransitEnterexit className='text-dark-white hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out text-2xl' />
          </Link>
          </main>
          <p className="text-dark-white/80" style={{
            fontFamily: "Anta , sans-serif"
          }}>
            Building AI Products and Solutions For Industries and Professionals in the realms of Computer Vision, Healthcare, NLP etc.,
          </p>
        </Card>
        <Card className="flex flex-col gap-4 border border-subtle-green hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-dark-green/40 bg-dark-black text-dark-white px-4 py-3">
          <div className="rounded-md p-3 flex items-center justify-center">
            <SmartphoneIcon className="w-6 h-6 text-primary-foreground" />
          </div>
          <main className='flex w-full justify-between items-center'>
            <h3 className="text-xl font-semibold" style={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: 700
          }}>Mobile Development</h3>

          <Link href="/">
            <MdTransitEnterexit className='text-dark-white hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out text-2xl' />
          </Link>
          </main>
          <p className="text-dark-white/80" style={{
            fontFamily: "Anta , sans-serif"
          }}>
            Empower your business with custom mobile applications that provide seamless user experiences and drive
            engagement with your customers.
          </p>
        </Card>
        <Card className="flex flex-col gap-4 border border-subtle-green hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-dark-green/40 bg-dark-black text-dark-white px-4 py-3">
          <div className="rounded-md p-3 flex items-center justify-center">
            <BriefcaseIcon className="w-6 h-6 text-primary-foreground" />
          </div>
          <main className='flex w-full justify-between items-center'>
            <h3 className="text-xl font-semibold" style={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: 700
          }}>Consulting Services</h3>

          <Link href="/">
            <MdTransitEnterexit className='text-dark-white hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out text-2xl' />
          </Link>
          </main>
          <p className="text-dark-white/80" style={{
            fontFamily: "Anta , sans-serif"
          }}>
            Leverage our team of experts to provide strategic guidance and tailored solutions that address your
            unique business challenges.
          </p>
        </Card>
      </div>
    </div>

    <section className='w-full text-center flex justify-center items-center pt-[2.5rem]'>
          <Button className='' variant={"outline"}>
            Visit Website
          </Button>
    </section>
  </section>
  )
}

export default Services