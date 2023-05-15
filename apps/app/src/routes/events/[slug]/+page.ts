import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.slug === 'hiphop') {
		return {
			title: 'Dancin saturdays with ILOVEHIPHOP',
			subtitle: 'Samstag 08. April • 21:00',
			content:
				'ILOVEHIPHOP ist back diesen saturdays DJ @itscharacterbaby versorgt euch mit den freshesten Hip Hop-Beats - das dürft ihr nicht verpassen!',
		};
	}

	throw error(404, 'Not found');
}
