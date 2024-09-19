import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";
import google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { GetuserByEmail, saltAndHashPassword } from "./data/users";
import { LoginSchema } from "./schemas";
import { ZodError } from "zod";

export default {
    providers: [
        GitHub, 
        google,
    ],
} satisfies NextAuthConfig;


{/*
 Credentials({
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                try {
                    const { email, password } = await LoginSchema.parseAsync(credentials);

                    const pwHash = await saltAndHashPassword(password);

                    if (!pwHash) {
                        throw new Error("Failed to hash password");
                    }
                    const user = await GetuserByEmail(email, pwHash);

                    if (!user) {
                        throw new Error("User not found.");
                    }
                    return user;
                } catch (error) {
                    if (error instanceof ZodError) {
                        return null;
                    }
                    throw error; 
                }
            },
        }),
*/}