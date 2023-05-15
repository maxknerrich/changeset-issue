<script>
	import Card from '$components/home/Card.svelte';
	import EventColumn from '$components/home/EventColumn.svelte';
	import HomeCard from '$components/home/HomeCard.svelte';
	import Topbar from '$components/layout/Topbar.svelte';
</script>

<Topbar />

<HomeCard />

<div class="flex items-center justify-center gap-5">
	<Card count={1500} name="Points" />
	<Card count={200} name="Streak" />
</div>

<a
	href="/checkin"
	class="bg-primary-base flex justify-center gap-4 items-center mt-5 rounded-lg font-bold py-4.5 w-full"
>
	<div class="i-system-uicons-capture w-6 h-6" />
	<p>Check-In</p>
</a>

<h2 class="text-2xl mb-6 mt-20 font-semibold">Future Events</h2>

<EventColumn
	href="hiphop"
	subtitle="Samstag 18. April • 21:00"
	title="90s HipHop Celebration"
/>
<EventColumn
	href="hiphop"
	subtitle="Samstag 18. April • 21:00"
	title="90s HipHop Celebration"
/>
