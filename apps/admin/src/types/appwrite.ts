import type { Models } from 'node-appwrite';

export interface Todos extends Models.Document {
	content: string;
	isComplete?: boolean;
}

export interface test extends Models.Document {
	title: string;
	completed?: boolean;
}

export interface Invitation extends Models.Document {
	user?: string;
	status: string;
	uuid: string;
}
