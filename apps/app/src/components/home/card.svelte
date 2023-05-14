<script lang="ts">
	export let count: number;
	export let name: string;
</script>

<div
	class="h-26 w-full bg-standard-500 flex flex-col rounded-xl justify-center items-center"
>
	<p class="font-bold text-2xl">{count}</p>
	<p class="font-semibold text-sm text-standard-300">{name}</p>
</div>
