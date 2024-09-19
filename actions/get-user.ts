"use server";

import { auth } from "@/auth";

export async function GetUser() {
    try {
        const session = await auth()
        if (!session) return null;

        return session;
    } catch (error) {
        return null;
    }
}