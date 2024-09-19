"use client"

import React, { useTransition } from 'react'
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
import AuthWrapper from '@/components/auth/auth-wrapper';

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
        router.push('/dashboard');
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

  return (
    <AuthWrapper message='Welcome back' submessage={'subcribe to get frequent updates on the app'}> 
        <Form
      {...form}>
        <form className="signin-form flex flex-col gap-y-4 mt-6" onSubmit={form.handleSubmit(onSubmit)}>
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
          Dont have an account?<span className="sign-up-link"><Link href={"/sign-up"}>
          Sign up
          </Link></span>
        </p>
        </form>
      </Form>
    </AuthWrapper>
  )
}

export default SignIn