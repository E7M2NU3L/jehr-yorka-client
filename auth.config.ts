import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import Credentials from 'next-auth/providers/credentials'; 
import { LoginSchema } from "./schemas";
import { GetuserByEmail } from "./data/users";
import bcrypt from 'bcrypt';

export default { providers: [
    Google,
    GitHub
] } satisfies NextAuthConfig

/*
Credentials({
         async authorize(credentials) {
            const validatedFields = LoginSchema.safeParse(credentials);

            if (validatedFields.success) {
                const {email, password} = validatedFields.data;

                const user = await GetuserByEmail(email);
                if (!user || !user.password) return null;

                const isValid = await bcrypt.compare(password, user.password);
                if (isValid) return user;
            }

            return null;
        }
    })
*/