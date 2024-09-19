import React from 'react'
import './auth-wrapper.css'
import { Button } from '../ui/button'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { LoginGithub, LoginGoogle } from '@/actions/login'
import { toast } from '../ui/use-toast'
import { Separator } from '../ui/separator'

const AuthWrapper = ({children, message, submessage} : {children : React.ReactNode, message : string, submessage : string}) => {
    async function GoogAuth(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const promise = await LoginGoogle();
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
                    variant: "destructive",
                    title: "Unknown Error",
                    description: 'Internal server Error, Try again later'
                })
            }
        }
    }

    async function GithubAuth(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const promise = await LoginGithub();
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
                    variant: "destructive",
                    title: "Unknown Error",
                    description: 'Internal server Error, Try again later'
                })
            }
        }
    }
  return (
    <div className='min-h-[90vh] flex justify-center items-center text-dark-white py-4' style={{
        fontFamily: "Oswald, sans-serif"
      }}>
         <section className='max-w-xl w-[400px]'>
         <div className="signin-form-container text-dark-white gap-y-3 bg-[#1a1a1a] outline-dark-white rounded-2xl hover:shadow-2xl hover:shadow-dark-gold transition-all duration-300 ease-in-out">
        <p className="title">{message}</p>
        <p className="message">{submessage}</p>  
        {children}
        <section className='flex justify-between items-center relative overflow-hidden px-2'>
            <Separator className='w-[40%]' />
            <h1 className='text-dark-white'>
              Or
            </h1>
            <Separator className='w-[40%]' />
          </section>

          <div className="buttons-container flex flex-col justify-center items-center gap-y-4">
          <form
                onSubmit={GithubAuth}
            >
            <Button variant={"secondary"} className="apple-login-button text-xl">
                <FaGithub />
                <span>Log in with Github</span>
            </Button>
          </form>
          <form
               onSubmit={GoogAuth}
            >
          <Button variant={"outline"} className="google-login-button text-xl">
            <FaGoogle />
            <span >Log in with Google</span>
          </Button>
          </form>
        </div>
        </div>
         </section>
    </div>
  )
}

export default AuthWrapper