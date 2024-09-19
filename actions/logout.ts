"use server"

import { signOut } from "@/auth";

export async function LogoutUser() {
    try {
        const promise = await signOut();
    } catch (error) {
        return null;
    }
}