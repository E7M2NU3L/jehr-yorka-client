import { db } from "@/lib/db"
import bcrypt from 'bcrypt'

export const GetuserByEmail = async (email : string, password : string) => {
    try {
        const EmailVerified = await db.user.findFirst({
            where : {
                email,
            }
        });

        if (!EmailVerified) {
            return null;
        }

        const PasswordMatch = await bcrypt.compare(password, EmailVerified?.password!);

        if (!PasswordMatch) {
            return null;
        }
        else {
            return EmailVerified;
        }
    } catch (error) {
        return null;
    }
};

export const GetUserbyId = async (id: string)  => {
    try {
        const User = await db.user.findFirst({
            where : {
                id,
            }
        });
        return User;
    } catch (error) {
        return null;
    }
}

export const saltAndHashPassword = async (password: string): Promise<string | null> => {
    try {
        if (!password) {
            return null;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
        
    } catch (error) {
        return null;
    }
};
