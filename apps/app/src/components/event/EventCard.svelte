<script lang="ts">
	export let title: string;
	export let subtitle: string;
</script>

<div
	class="flex flex-col justify-center items-start p-6 h-68 rounded-xl bg-standard-400"
>
	<h1 class="font-bold text-2xl">{title}</h1>
	<p class="font-semibold text-standard-200">{subtitle}</p>
</div>
