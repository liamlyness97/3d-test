<script lang="ts">
	import type CC from 'camera-controls';
	import { fly } from 'svelte/transition';
	import { partColours } from '$lib/PartColours.svelte';

	let { tab = $bindable(), controls = $bindable() }: { tab: string; controls: CC } = $props();
</script>

<!-- Forks Config -->
<div
	class="fixed bottom-10 z-50 flex w-full justify-center gap-4"
	in:fly={{ duration: 300, delay: 200, y: 20 }}
	out:fly={{ duration: 200, y: 20 }}
>
	<button
		onclick={() => {
			tab = 'default';
			controls?.setPosition(1.8, 0.5, 0, true);
			controls?.setTarget(0, 0.5, 0, true);
		}}
		class="flex h-8 w-8 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Back"
	>
		<iconify-icon icon="material-symbols-light:arrow-back"></iconify-icon>
	</button>
	<button
		onclick={() => {
			controls?.setPosition(1, 0.75, -0.75, true);
			controls?.setTarget(0, 0.25, -0.5, true);
		}}
		class="flex h-8 w-8 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Forks"
	>
		<img class="h-4 w-4" src="/icons/forks.svg" alt="forks Icon" />
	</button>
	<button
		onclick={() => {
			partColours.forks = '#025c8d';
			controls?.setPosition(1.8, 0.5, 0, true);
			controls?.setTarget(0, 0.5, 0, true);
			tab = 'config';
		}}
		class="flex h-8 w-8 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-6 w-6 rounded-full bg-[#025c8d]"></div>
	</button>
	<button
		onclick={() => {
			partColours.forks = '#560606';
			controls?.setPosition(1.8, 0.5, 0, true);
			controls?.setTarget(0, 0.5, 0, true);
			tab = 'config';
		}}
		class="flex h-8 w-8 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-6 w-6 rounded-full bg-[#560606]"></div>
	</button>
	<button
		onclick={() => {
			partColours.forks = '#033a1d';
			controls?.setPosition(1.8, 0.5, 0, true);
			controls?.setTarget(0, 0.5, 0, true);
			tab = 'config';
		}}
		class="flex h-8 w-8 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-6 w-6 rounded-full bg-[#033a1d]"></div>
	</button>
	<button
		onclick={() => {
			partColours.forks = '#b2391b';
			controls?.setPosition(1.8, 0.5, 0, true);
			controls?.setTarget(0, 0.5, 0, true);
			tab = 'config';
		}}
		class="flex h-8 w-8 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-6 w-6 rounded-full bg-[#b2391b]"></div>
	</button>
	<button
		onclick={() => {
			partColours.forks = '#d56c7a';
			controls?.setPosition(1.8, 0.5, 0, true);
			controls?.setTarget(0, 0.5, 0, true);
			tab = 'config';
		}}
		class="flex h-8 w-8 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-6 w-6 rounded-full bg-[#d56c7a]"></div>
	</button>
	<button
		onclick={() => {
			partColours.forks = '#151619';
			controls?.setPosition(1.8, 0.5, 0, true);
			controls?.setTarget(0, 0.5, 0, true);
			tab = 'config';
		}}
		class="flex h-8 w-8 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-6 w-6 rounded-full bg-[#151619]"></div>
	</button>
</div>
