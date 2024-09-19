"use client";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { NavDrawer } from '@/utils/navbar/navdrawer'
import { Logout } from '@/utils/navbar/logout'
import { toast } from '../ui/use-toast'
import { GetUser } from '@/actions/get-user'
import { LogoutUser } from '@/actions/logout';
import { UserImage } from './userbutton';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

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

interface UserDataProps {
  email: string | null | undefined;
  image: string | null | undefined;
  name: string | null | undefined;
}


const Navbar = () => {

  const [loggedin, setLoggedin] = useState<Boolean>(false);
  const [userData, setUserData] = useState<UserDataProps | null>(null);

  const getUserClient = async () => {
    try {
      const promise = await GetUser();
      if (promise?.user) {
        setUserData({
          email: promise.user.email || '',
          image: promise.user.image || '',
          name: promise.user.name || ''
        });
        setLoggedin(true);
      }
      
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: 'destructive',
          title: error.name,
          description: error.message
        })
      }
      else {
        toast({
          variant: 'destructive',
          title: 'Unknown Error',
          description: 'Internal Server Error'
        })
      }
    }
  }

  useEffect(() => {
    getUserClient();
  }, [])

  const LogoutClient = async () => {
    try {
      await LogoutUser();
      setLoggedin(false);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: 'destructive',
          title: error.name,
          description: error.message
        })
      }
      else {
        toast({
          variant: 'destructive',
          title: 'Unknown Error',
          description: 'Internal Server Error'
        })
      }
    }
  }

  return (
    <div className='min-h-[10vh] flex justify-between items-center w-full px-[1.2rem]'>
      
      <div className='flex justify-around items-center space-x-3 md:space-x-[1.8rem] lg:space-x-[2.4rem]'>
        
        <section>
          <Link href="/" className='flex justify-center items-center gap-x-3'>
            <Image src="/images/logo.png" alt='yorka' width={32} height={32} className='rounded-full' />
            <h1 className='text-xl font-semibold flex gap-1 items-center text-dark-white' style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: 700
            }}>
              Qui<span className='text-subtle-green'>xore</span>
            </h1>
          </Link>
        </section>

        <ul className='items-center space-x-5 w-full hidden md:flex'>
        {navElements.map((el, index) => (
            <>
                <li key={el.id} className='font-extralight cursor-pointer text-dark-white/80 hover:bg-gradient-to-tr rounded-lg hover:shadow-md hover:from-dark-gold hover:via-dark-gold/70 hover:to-transparent hover:px-2 hover:py-1 transition-all duration-300 ease-in-out active:translate-y-1 active:scale-95' style={{
                  fontFamily: "Anta, sans-serif"
                }}>
                  <Link href={el.links}>
                    {el.text}
                  </Link>
                </li>
            </>
          ))}
        </ul>
      </div>

      <div className='hidden md:flex'>
        {!loggedin ? (
          <>
            <section className='flex justify-around items-start space-x-4'>
              <Button variant="default" className='text-md font-light' style={{
                fontFamily: "Anta, sans-serif"
              }}>
                <Link href={"/sign-in"}>
                  Login
                </Link>
              </Button>

              <Button variant="secondary" className='text-md font-light' style={{
                fontFamily: 'Anta, sans-serif'
              }}>
                <Link href={"/sign-up"}>
                  Sign up
                </Link>
              </Button>
            </section>
          </>
        ) : (
          <>
             <section className='flex justify-around items-center space-x-4'>
              <section className='flex space-x-6 items-start'>
              <Avatar>
                <AvatarImage src={userData?.image || 
              ""} alt="@shadcn" />
                <AvatarFallback>{userData?.name}</AvatarFallback>
              </Avatar>
              <Button variant="outline" className='text-md font-light' style={{
                fontFamily: "Anta, sans-serif"
              }}>
                <Link href="/dashboard">
                  Console
                </Link>
              </Button>
              
                <Logout logoutFn={LogoutClient} />
              </section>
            </section>
          </>
        )}
      </div>

      <section className='block sm:hidden'>
      <NavDrawer />
      </section>
    
    </div>
  )
}

export default Navbar