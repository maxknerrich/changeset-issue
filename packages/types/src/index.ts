import type { Models } from 'appwrite';

export interface Invitation extends Models.Document {
	user?: string;
	status: string;
}
