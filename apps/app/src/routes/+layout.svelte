<script>
	import '@unocss/reset/tailwind.css';
	import 'uno.css';
	import BottomNav from '../components/layout/bottomNav.svelte';
</script>

<div />

<main class="text-white bg-standard-600 min-h-screen">
	<div id="container" class="p-6">
		<slot />
	</div>
	<BottomNav />
</main>


