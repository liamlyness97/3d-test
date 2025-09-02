<script lang="ts">
	import type CC from 'camera-controls';
	import { fly } from 'svelte/transition';
	import { colourMap, partColours } from '$lib/PartColours.svelte';

	let { tab = $bindable(), controls = $bindable() }: { tab: string; controls: CC } = $props();
</script>

<!-- Frame Config -->
<div
	class="fixed bottom-24 z-50 flex w-full justify-center gap-4"
	in:fly={{ duration: 300, delay: 200, y: 20 }}
	out:fly={{ duration: 200, y: 20 }}
>
	<button
		onclick={() => {
			tab = 'default';
			controls?.setPosition(0.1, 0.7, 1.5, true);
			controls?.setTarget(0.2, 0.2, -0.9, true);
		}}
		class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1.25rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Back"
	>
		<iconify-icon icon="material-symbols-light:arrow-back"></iconify-icon>
	</button>
	{#each Object.keys(colourMap) as colour}
		<button
			onclick={() => {
				partColours.frame = colourMap[String(colour)];
				controls?.setPosition(0.1, 0.7, 1.5, true);
				controls?.setTarget(0.2, 0.2, -0.9, true);
				tab = 'frameConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[{colourMap[colour]}]"></div>
		</button>
	{/each}
</div>
