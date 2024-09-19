import { Client, Storage } from 'appwrite'
import {appwriteConstants } from '@/constants/appwrite-constants'

export const client = new Client();

client
    .setEndpoint(appwriteConstants.projectEndpoint)
    .setProject(appwriteConstants.projectId);

export const buckets = new Storage(client);