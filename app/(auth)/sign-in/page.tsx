"use client"

import React, { useTransition } from 'react'
import {FaGoogle, FaGithub} from 'react-icons/fa'
import './main.css'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { LoginSchema } from '@/schemas';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { FormError } from '@/components/auth/form-error';
import { FormSuccess } from '@/components/auth/form-success';
import { login } from '@/actions/login';
import { signIn } from '@/auth';

const SignIn = () => {
  const [isPending, setIsPending] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    try {
      setIsPending(() => {
        login(values).then((data : any) => {
          setSuccessMessage(data.success ? data.success : '');
          setErrorMessage(data.error ? data.error : '');
        })
      })

      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      else {
        console.log("Unknown Error!");
      }
    }
  }

  const handleGoogle = async() => {
    try {
      await signIn();
    } catch (error) {
      console.log(error);
    }
  }

  const handleGithub = async() => {
    try {
      await signIn();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='min-h-[90vh] flex justify-center items-center text-dark-white' style={{
      fontFamily: "Oswald, sans-serif"
    }}>
       <div className="signin-form-container text-dark-white bg-[#1a1a1a] outline-dark-white rounded-2xl hover:shadow-2xl hover:shadow-dark-gold transition-all duration-300 ease-in-out">
      <p className="text-3xl font-bold pt-3 pb-[2rem] text-dark-white" style={{
        fontFamily: "Anta, sans-serif"
      }}>Welcome back</p>
      <Form
      {...form}>
        <form className="form" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name='email'
            control={form.control}
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <label>
                    <input disabled={isPending} {...field} className="input" type="email" placeholder="Email" required={true}/>
                  </label>
                </FormControl>
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
                    <input {...field} disabled={isPending} className="input" type="password" placeholder="Password" required={true}/>
                  </label>
                </FormControl>
              </FormItem>
            )}
          />
          <p className="page-link">
            <span className="page-link-label hover:text-dark-gold">
              <Link href={"/forgot-password"}>
              Forgot Password?
              </Link>
            </span>
          </p>
          <FormError message={errorMessage} />
          <FormSuccess message={successMessage} />
          <Button type='submit' disabled={isPending}>
            <>
              {isPending ? "Please wait..." : "Login"}
            </>
          </Button>

          <p className="sign-up-label">
          Don't have an account?<span className="sign-up-link"><Link href={"/sign-up"}>
          Sign up
          </Link></span>
        </p>
        <div className="buttons-container">
          <Button variant={"secondary"} className="apple-login-button text-xl" onClick={handleGithub}>
            <FaGithub />
            <span>Log in with Github</span>
          </Button>
          <Button variant={"outline"} className="google-login-button text-xl" onClick={handleGoogle}>
            <FaGoogle />
            <span >Log in with Google</span>
          </Button>
        </div>
        </form>
      </Form>
    </div>
    </div>
  )
}

export default SignIn