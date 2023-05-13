import { databases, DATABASE_ID } from '$lib/server/appwrite.js';
import type { Invitation } from '$types/appwrite.js';
import type { PageServerLoad } from './$types';

interface Data {
	invitations: Invitation[];
}

export const load = (async ({ params }) => {
	const data = await databases.listDocuments(DATABASE_ID, 'invitation');
	return {
		invitations: data.documents,
	} as Data;
}) satisfies PageServerLoad;
