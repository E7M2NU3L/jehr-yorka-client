import { appwriteConstants } from "@/constants/appwrite-constants"
import { buckets } from "@/lib/appwrite"
import { ID } from "appwrite"

export async function createFile (file : File) {
    try {
        const promise = await buckets.createFile(
            appwriteConstants.imageBucket,
            ID.unique(),
            file
        )

        if (!promise) return Error;

        return await buckets.getFileView(
            appwriteConstants.imageBucket,
            promise.$id);
    } catch (error) {
        return false
    }
}