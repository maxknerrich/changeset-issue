<script>
	import '@unocss/reset/tailwind.css';
	import 'uno.css';
	import BottomNav from '$components/layout/BottomNav.svelte';
	import { App as CapacitorApp } from '@capacitor/app';
	import { Capacitor } from '@capacitor/core';
	import { page } from '$app/stores';

	// Go Back on Native Back Button
	if (Capacitor.isNativePlatform()) {
		CapacitorApp.addListener('backButton', ({ canGoBack }) => {
			if (!canGoBack) {
				CapacitorApp.exitApp();
			} else {
				window.history.back();
			}
		});
	}

	const pagesWithNav = ['/', '/rewards', '/checkin', '/partner'];

	if (Capacitor.isNativePlatform()) {
		window.screen.orientation.lock('portrait');
	}
</script>

<div />

<main class="text-white bg-standard-600 min-h-screen">
	<div id="container" class="p-6 min-h-screen">
		<slot />
	</div>
	{#if pagesWithNav.includes($page.url.pathname)}
		<BottomNav />
	{/if}
</main>

<style>
	:global(a, button, select, input, textarea) {
		-webkit-tap-highlight-color: transparent;
	}
</style>
