<script lang="ts">
	import BottomNavItem from './BottomNavItem.svelte';
	import { page } from '$app/stores';

	const NavItems = [
		{
			href: '/',
			icon: 'i-system-uicons-home',
			title: 'Home',
		},
		{
			href: '/rewards',
			icon: 'i-system-uicons-tag',
			title: 'Rewards',
		},
		{
			href: '/checkin',
			icon: 'i-system-uicons-capture',
			title: 'Check-In',
		},
		{
			href: '/partner',
			icon: 'i-system-uicons-drag-circle',
			title: 'Partner',
		},
	];

	$: activeHref = $page.url.pathname;

</script>

<div class="px-2 sticky bottom-3">
	<div
		class="flex text-white bg-standard-600 rounded-40 font-bold py-4 px-5 border border-standard-500 w-full justify-between items-center"
	>
		{#each NavItems as { href, icon, title }, i}
			<BottomNavItem
				active={href == activeHref}
				{href}
				{icon}
				{title}
			/>
		{/each}
	</div>
</div>
