<script lang="ts">
	export let href: string;
	export let outline: boolean = false;

	const style: string = outline
		? 'bg-transparent border border-primary-light'
		: 'bg-primary-base';
</script>

<a
	{href}
	class={'flex justify-center gap-4 items-center mt-5 rounded-50 font-bold py-4.5 w-full ' +
		style}
>
	<slot />
</a>
