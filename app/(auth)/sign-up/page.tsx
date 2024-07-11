"use client"

import React, { useTransition } from 'react'
import './main.css'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Separator } from '@/components/ui/separator'
import * as z from 'zod';
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Form, FormMessage, FormControl, FormField, FormItem} from '@/components/ui/form'
import { SignupSchema } from '@/schemas'
import { FormError } from '@/components/auth/form-error'
import { FormSuccess } from '@/components/auth/form-success'
import { useRouter } from 'next/navigation'
import { register } from '@/actions/register'

const SignUp = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useTransition();
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
  });

  const [successcontent, setsuccessContent] = React.useState(''); 
  const [errorContent, setErrorcontent] = React.useState('');

  const onSubmit = (values : z.infer<typeof SignupSchema>) => {
    try {
      setIsPending(() => {
        register(values).then((data : any) => {
          setErrorcontent(data.error ? data.error :  '');
          setsuccessContent(data.success ? data.success : '');
        });
      })
      setTimeout(() => {
        router.push('/sign-in');
        setErrorcontent('');
        setsuccessContent('');
      }, 4000);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      else {
        console.log("Unknown Error!");
        setErrorcontent("Unknown Error!");
      }
    }
  }
  
  return (
    <div className='min-h-[90vh] flex justify-center items-center text-dark-white' style={{
      fontFamily: "Oswald, sans-serif"
    }}>
      <Form {...form}>
        <form className="form-signup hover:shadow-2xl hover:shadow-subtle-gold transition-all duration-300 ease-in-out" onSubmit={form.handleSubmit(onSubmit)}>
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>        
            <div className="flex">
              <FormField
                control={form.control}
                name='firstName'
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <label>
                        <input {...field} disabled={isPending} className="input" type="text" placeholder="first name" required={true} />
                      </label>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='lastName'
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <label>
                        <input {...field} disabled={isPending} className="input" type="text" placeholder="last name" required={true} />
                      </label>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </div>

          <FormField
                control={form.control}
                name='email'
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <label>
                          <input {...field} disabled={isPending} className="input" type="email" placeholder="email" required={true} />
                        </label> 
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <label>
                          <input {...field} disabled={isPending} className="input" type="password" placeholder="password" required={true} />
                      </label>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />  

              <FormField
                control={form.control}
                name='confirmPassword'
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <label>
                        <input {...field} disabled={isPending} className="input" type="password" placeholder="confirm password" required={true} />
                      </label>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormError message={errorContent} />  
              <FormSuccess message={successcontent} />
          <Button type='submit' className='mt-3' disabled={isPending}>
            <>
                  {isPending ? 'Loading...' : 'Sign up'}
            </>
          </Button>
          <p className="signin">Already have an acount ? <Link href="/sign-in">Signin</Link> </p>

          <section className='flex justify-between items-center relative overflow-hidden px-2'>
            <Separator className='w-[40%]' />
            <h1 className='text-dark-white'>
              Or
            </h1>
            <Separator className='w-[40%]' />
          </section>

          <div className="buttons-container">
          <Button variant={"secondary"} className="apple-login-button text-xl">
            <FaGithub />
            <span>Sign up with Github</span>
          </Button>
          <Button variant={"outline"} className="google-login-button text-xl">
            <FaGoogle />
            <span >Sign up with Google</span>
          </Button>
        </div>
      </form>
      </Form>
    </div>
  )
}

export default SignUp