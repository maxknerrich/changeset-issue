<script lang="ts">
	export let logo: boolean = true;
</script>

<div class="flex justify-between items-center">
	{#if logo}
		<h2 class="font-bold text-white text-3xl">Saturdays</h2>
	{:else}
		<button
			class="text-white font-semibold flex items-center justify-center gap-1"
			on:click={() => window.history.back()}
		>
			<div class="w-4 h-4 i-system-uicons-chevron-left" />
			Back
		</button>
	{/if}
	<div
		class="text-white flex font-bold text-2xl items-center justify-center gap-4"
	>
		<div class="i-system-uicons-bell" />
		<div class="i-system-uicons-user-male" />
	</div>
</div>
