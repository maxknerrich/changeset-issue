import * as sdk from 'node-appwrite';
import { env } from '$env/dynamic/private';

const client = new sdk.Client();

const { APPWRITE_API_KEY, APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID } = env;

if (APPWRITE_API_KEY && APPWRITE_ENDPOINT && APPWRITE_PROJECT_ID) {
	client
		.setEndpoint(APPWRITE_ENDPOINT)
		.setProject(APPWRITE_PROJECT_ID)
		.setKey(APPWRITE_API_KEY);
} else {
	throw new Error('Missing Appwrite environment variables');
}

const databases = new sdk.Databases(client);
const { APPWRITE_DATABASE_ID } = env;
let DATABASE_ID: string;
if (APPWRITE_DATABASE_ID) {
	try {
		const promise = await databases.get(APPWRITE_DATABASE_ID);
		DATABASE_ID = promise.$id;
	} catch (error) {
		// throw new Error('Appwrite database not found');
	}
} else {
	throw new Error('Missing Appwrite environment variables');
}

export { client, databases, DATABASE_ID };
