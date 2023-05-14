<script lang="ts">
	import { fade } from 'svelte/transition';

	export let href: string;
	export let icon: string;
	export let title: string;
	export let active: boolean = false;
	export let onClick: () => void;

	$: background = active ? 'bg-standard-500' : '';
</script>

<a {href} on:click={onClick}>
	<div
		class={'flex items-center transition-all gap-2 rounded-3xl py-2 px-4 ' +
			background}
	>
		<div class={'w-6 h-6 ' + icon} />
		{#if active}
			<p>{title}</p>
		{/if}
	</div>
</a>
