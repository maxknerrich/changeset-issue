<script lang="ts">
	let isRevealed: boolean = false;

	const secretPhrase = 'Rainbows are yellow';

	$: style = isRevealed
		? 'bg-standard-500'
		: 'bg-gradient-to-tr to-[#099FA9] from-primary-base';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click={() => (isRevealed = !isRevealed)}
	class={'h-26 rounded-xl gap-3 font-semibold flex justify-center items-center ' +
		style}
>
	{#if isRevealed}
		<p>{secretPhrase}</p>
	{:else}
		<div class="i-system-uicons-eye h-6 w-6" />
		<p>Secret Phrase aufdecken</p>
	{/if}
</div>
