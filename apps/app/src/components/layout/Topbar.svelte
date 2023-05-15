<script lang="ts">
	export let logo: boolean = true;
	import saturdays from '$assets/saturdayslogo.png';
</script>

<div class="flex mb-8 justify-between items-center">
	{#if logo}
		<img class="h-13" src={saturdays} alt="saturdays" />
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
