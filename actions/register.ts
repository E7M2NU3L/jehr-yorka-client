"use server";
import { SignupSchema } from '@/schemas';
import * as z from 'zod';
import bcrypt from 'bcrypt';
import { GetuserByEmail } from '@/data/users';
import { db } from '@/lib/db';

interface Destructured {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    confirmPassword: string;
}

export const register = async (values : z.infer <typeof SignupSchema>) => {
    const validatedData = SignupSchema.safeParse(values);

    if (!validatedData.success) {
        return {error: "Invalid Input Fields, Try Again!"};
    }

    const {email, password, firstName, lastName, confirmPassword} : Destructured = validatedData.data;
    // checking if Email already exists
    const EmailFound = await GetuserByEmail(email, password);

    if (EmailFound) {
        return {error: "Email already exists, Try with a different one!"};
    }

    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // creating the new user
    await db.user.create({
        data: {
            email,
            password: hashedPassword,
            name: `${firstName} ${lastName}`
        }
    });
    
    return {success: "Registration successful"}
}