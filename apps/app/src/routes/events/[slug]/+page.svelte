<script lang="ts">
	import Topbar from '$components/layout/topbar.svelte';
	import EventCard from '$components/event/eventCard.svelte';
	import type { PageData } from './$types';
	import DjColumn from '$components/event/DJColumn.svelte';
	import SecretPhraseReveal from '$components/event/SecretPhraseReveal.svelte';
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
