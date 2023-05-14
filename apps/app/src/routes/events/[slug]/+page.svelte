<script lang="ts">
	import Topbar from '$components/layout/topbar.svelte';
	import EventCard from '$components/event/eventCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const { title, subtitle, content } = data;
</script>

<Topbar logo={false} />

<EventCard {title} {subtitle} />

<p>{content}</p>
