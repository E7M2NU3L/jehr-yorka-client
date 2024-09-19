"use server";

import { LoginSchema } from '@/schemas';
import * as z from 'zod';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { GetuserByEmail, saltAndHashPassword } from '@/data/users';
import jwt from 'jsonwebtoken';

export const login = async (values : z.infer<typeof LoginSchema>) => {
    const validatedData = LoginSchema.safeParse(values);
    if (!validatedData.success) {
        return {
            error: "Invalid Fields!, please try again"
        }};

    const {email, password} = validatedData.data;
    try {
        try {
            const pwHash = await saltAndHashPassword(password);

            if (!pwHash) {
                return {error: "Password is not hashed properly"};;
            }
            const user = await GetuserByEmail(email, pwHash);

            if (!user) {
                return {error : 'User not Found'};
            }
            const payload = {
                userId : user.id,
                userEmail : user.email,
                userImage : user.image,
                username : user.name,
            };
            const token = jwt.sign(payload , process.env.NEXT_PUBLIC_JWT_AUTH_SECRET!, {
                expiresIn: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 90),
                algorithm: 'RS256'
            })
            return {success : token};
        } catch (error) {
            if (error instanceof z.ZodError) {
                return {error : error.message};
            }
        }
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

export const LoginGoogle = async () => {
    try {
        await signIn('google');
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

export const LoginGithub = async () => {
    try {
        await signIn('github');
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