"use server";

import { LoginSchema } from '@/schemas';
import * as z from 'zod';
import { signIn } from '@/auth';
import { default_login_redirect } from '@/routes';
import { AuthError } from 'next-auth';

export const login = async (values : z.infer<typeof LoginSchema>) => {
    const validatedData = LoginSchema.safeParse(values);
    if (!validatedData.success) {
        return {
            error: "Invalid Fields!, please try again"
        }};

    const {email, password} = validatedData.data;
    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: default_login_redirect
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin': 
                    return {error: "Invalid Credentials"}
                default:
                    return {error: "Something went wrong"};
            }
        }

        throw error;
    }
}