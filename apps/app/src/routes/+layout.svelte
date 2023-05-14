<script>
	import '@unocss/reset/tailwind.css';
	import 'uno.css';
	import BottomNav from '$components/layout/bottomNav.svelte';
	import { App as CapacitorApp } from '@capacitor/app';
	import { Capacitor } from '@capacitor/core';

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
</script>

<div />

<main class="text-white bg-standard-600 min-h-screen">
	<div id="container" class="p-6 min-h-screen">
		<slot />
	</div>
	<BottomNav />
</main>
