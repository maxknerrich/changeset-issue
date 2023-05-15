import { databases, DATABASE_ID } from '$lib/appwrite.js';
import { state } from '$lib/stores.js';

import type { PageLoad } from './$types';
import type { Invitation } from 'types';

export const ssr = false;

interface Data {
	invitations: Invitation[];
}

export const load = (async ({ params }) => {
	await state.login('test@test.de', '12345678');
	const data = await databases.listDocuments(DATABASE_ID, 'invitation');
	return {
		invitations: data.documents,
	} as Data;
}) satisfies PageLoad;
