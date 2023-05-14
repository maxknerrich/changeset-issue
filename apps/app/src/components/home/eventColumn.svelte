<script lang="ts">
	export let href: string;
	export let title: string;
	export let subtitle: string;
</script>

<a href={`/events/${href}`}>
	<div class="flex mb-8 justify-start items-center gap-4">
		<div class="h-14 w-14 rounded-lg bg-standard-300" />
		<div>
			<h3 class="font-bold text-xl">{title}</h3>
			<p class="font-semibold text-standard-300">{subtitle}</p>
		</div>
	</div>
</a>
