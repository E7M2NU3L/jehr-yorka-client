import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Invalid Email"
    }),
    password: z.string()
});

export const SignupSchema = z.object({
    email: z.string().email({
        message: "Invalid Email"
    }),
    password: z.string().min(8).max(16),
    confirmPassword: z.string().min(8).max(16),
    firstName: z.string(),
    lastName: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});
