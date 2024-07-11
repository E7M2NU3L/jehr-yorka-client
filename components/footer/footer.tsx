import React from 'react'
import { Button } from '../ui/button'
import { Facebook, Instagram, Linkedin, Send, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'

const navElements = [
  {
    id: 1,
    text: 'pricing',
    links: '/pricing',
  },
  {
    id: 2,
    text: 'blogs',
    links: '/blogs'
  },
  {
    id: 3,
    text: 'products',
    links: '/products'
  },
  {
  id: 4, 
  text: 'how to use',
  links: '/how-to-use'
}]

const servicesElements = [
  {
    id: 1,
    text: 'content planner',
    links: 'https://www.jehr-sphingot.vercel.app'
  },
  {
    id: 2,
    text: 'Roadmap Designer',
    links: 'https://www.trontex.vercel.app'
  },
  {
    id: 3,
    text: 'Property Management System',
    links: 'https://www.jehr-pms.vercel.app'
  },
  {
    id: 4,
    text: 'Hr Automation System',
    links: 'https://www.resume-summarizer-wone.vercel.app'
  },
  {
    id: 5,
    text: 'Resume Designer',
    links: 'https://www.jehr-resumes.vercel.app'
  }
]

const yearInfo  = () => {
  const date = new Date();
  let year = date.getFullYear();
  return year;
}

const Footer = () => {
  return (
    <section className='gap-y-[2rem] md:gap-y-0'>
      <div className='min-h-[40vh] bg-dark-black/90 flex justify-around items-center flex-wrap flex-col md:flex-row pt-[2rem] gap-y-[2rem] md:gap-y-0'>
      <section className='flex flex-col px-[2rem]'>
        <h1 className='text-dark-white text-2xl' style={{
          fontFamily: "Oswald, sans-serif"
        }}>
          Jehr-WorkProd
        </h1>
        <h1 className='text-subtle-white/70 text-sm font-light pt-[0.4rem] pb-[0.7rem] w-[350px]' style={{
          fontFamily: "Anta, sans-serif"
        }}>
          Embrace the Field of Automation to its peak, sign for weekly newletters and blogs from jehr tech solutions
        </h1>

        <form className='flex flex-row'>
        <input placeholder='Email Address' className='bg-dark-black bg-opacity-50 backdrop:blur-lg border border-dark-gold text-sm font-light ps-2' style={{
          fontFamily: "Anta, sans-serif"
        }} />
        <Button variant="secondary">
          <Send />
        </Button>
        </form>
      </section>
      <section className='flex flex-col px-[2rem]'>
        <h1 className='text-dark-white text-2xl' style={{
          fontFamily: "Oswald, sans-serif"
        }}>
          Quick Links
        </h1>

        <ul className='pt-[0.7rem] pb-[1.3rem] md:pb-0'>
          {navElements.map((el, index) => (
            <>
              <li key={index} className='font-light text-dark-white/80 hover:translate-x-1 hover:scale-105 active:translate-y-1 active:scale-95 hover:text-dark-white/90 transition-all duration-200 ease-in-out cursor-pointer' style={{
                fontFamily: "Lato, sans-serif"
              }}>
                <Link href={el.links}>
                  {el.text}
                </Link>
              </li>
            </>
          ))}
        </ul>
      </section>

      <section className='flex flex-col px-[2rem]'>
        <h1 className='text-dark-white text-2xl' style={{
          fontFamily: "Oswald, sans-serif"
        }}>
          Our Products
        </h1>

        <ul className='pt-[0.7rem] pb-[1.3rem] md:pb-0'>
          {servicesElements.map((el, index) => (
            <>
              <li key={index} className='font-light text-dark-white/80 hover:translate-x-1 hover:scale-105 active:translate-y-1 active:scale-95 hover:text-dark-white/90 transition-all duration-200 ease-in-out cursor-pointer' style={{
                fontFamily: "Lato, sans-serif"
              }}>
                <Link href={el.links}>
                  {el.text}
                </Link>
              </li>
            </>
          ))}
        </ul>
      </section>
    </div>

    <section className='justify-center w-full items-center flex pb-[1rem] flex-col'>
      <h1 className='text-subtle-white' style={{
        fontFamily: "Oswald, sans-serif"
      }}>
        &copy;{yearInfo()} All Rights Reserved
      </h1>
      <div className='flex-row space-x-4 flex py-[1rem]'>
      <Instagram className='hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out active:translate-y-1 active:scale-95'/>
      <Facebook className='hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out active:translate-y-1 active:scale-95'/>
      <Twitter className='hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out active:translate-y-1 active:scale-95'/>
      <Linkedin className='hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out active:translate-y-1 active:scale-95'/>
      <Youtube className='hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out active:translate-y-1 active:scale-95'/>
    </div>
    </section>
    </section>
  )
}

export default Footer