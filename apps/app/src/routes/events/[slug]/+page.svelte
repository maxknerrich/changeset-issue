<script lang="ts">
	import Topbar from '$components/layout/Topbar.svelte';
	import EventCard from '$components/event/EventCard.svelte';
	import type { PageData } from './$types';
	import DjColumn from '$components/event/DJColumn.svelte';
	import SecretPhraseReveal from '$components/event/SecretPhraseReveal.svelte';
	import LinkButton from '$components/common/LinkButton.svelte';
	export let data: PageData;

	const { title, subtitle, content } = data;
</script>

<Topbar logo={false} />

<div class="my-8 mb-12">
	<EventCard {title} {subtitle} />
</div>

<section class="mb-8">
	<DjColumn />
</section>

<p class="font-semibold">{content}</p>

<div class="my-10">
	<SecretPhraseReveal />
</div>

<div class="flex justify-center items-center gap-5">
	<LinkButton href="/checkin">Reservieren</LinkButton>
	<LinkButton href="/checkin" outline={true}>
		<div class="i-system-uicons-capture w-6 h-6" />
		<p>Checkin</p>
	</LinkButton>
</div>
