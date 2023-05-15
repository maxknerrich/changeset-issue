import { Client, Databases, Account } from 'appwrite';
import { env } from '$env/dynamic/public';

const client = new Client();
const account = new Account(client);
const databases = new Databases(client);

const { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID } = env;

if (PUBLIC_APPWRITE_ENDPOINT && PUBLIC_APPWRITE_PROJECT_ID) {
	client
		.setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
		.setProject(PUBLIC_APPWRITE_PROJECT_ID);
} else {
	throw new Error('Missing Appwrite environment variables');
}

const { PUBLIC_APPWRITE_DATABASE_ID } = env;
let DATABASE_ID: string;
if (PUBLIC_APPWRITE_DATABASE_ID) {
	DATABASE_ID = PUBLIC_APPWRITE_DATABASE_ID;
}

export { client, databases, DATABASE_ID, account };
