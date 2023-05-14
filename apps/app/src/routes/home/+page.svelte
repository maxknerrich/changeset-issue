<script>
	import Card from '$components/home/card.svelte';
	import EventColumn from '$components/home/eventColumn.svelte';
	import Topcard from '$components/home/topcard.svelte';
	import Topbar from '$components/layout/topbar.svelte';
</script>

<Topbar />

<Topcard />

<div class="flex items-center justify-center gap-5">
	<Card count={1500} name="Points" />
	<Card count={200} name="Streak" />
</div>

<button
	class="bg-primary-base flex justify-center gap-4 items-center mt-5 rounded-lg font-bold py-4.5 w-full"
>
	<div class="i-system-uicons-capture w-6 h-6" />
	<p>Check-In</p>
</button>

<h2 class="text-2xl mb-6 mt-20 font-semibold">Future Events</h2>

<EventColumn />
<EventColumn />

