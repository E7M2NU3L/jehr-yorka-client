import { db } from "@/lib/db"

export const GetuserByEmail = async (email : string) => {
    try {
        const EmailVerified = await db.user.findFirst({
            where : {
                email,
            }
        });
        return EmailVerified;
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