import { account } from './appwrite';
import type { Models } from 'appwrite';
import { writable } from 'svelte/store';

interface Alert {
	type: string;
	mesage: string;
}

const createState = () => {
	const { subscribe, set, update } = writable({
		account: null as null | Models.User<Models.Preferences>,
		alert: null as null | Alert,
	});

	return {
		subscribe,
		signup: async (email: string, password: string, name: string) => {
			return await account.create('unique()', email, password, name);
		},
		user: async () => {
			return await account.get();
		},
		login: async (email: string, password: string) => {
			await account.createEmailSession(email, password);
			const user = await account.get();
			console.log(user);
			state.init(user);
		},
		logout: async () => {
			await account.deleteSession('current');
		},
		alert: async (alert: Alert) =>
			update(n => {
				n.alert = alert;
				return n;
			}),
		init: async (account: null | Models.User<Models.Preferences> = null) => {
			return set({ account, alert: null });
		},
		checkSession: async () => {
			const user = await account.get();
			state.init(user);
		},
	};
};
export const state = createState();
