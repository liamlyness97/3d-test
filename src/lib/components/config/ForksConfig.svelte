<script lang="ts">
	import type CC from 'camera-controls';
	import { fly } from 'svelte/transition';
	import { partColours } from '$lib/PartColours.svelte';

	let { tab = $bindable(), controls = $bindable() }: { tab: string; controls: CC } = $props();
</script>

<!-- Forks Config -->
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
		class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1.25rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Back"
	>
		<iconify-icon icon="material-symbols-light:arrow-back"></iconify-icon>
	</button>
	<button
		onclick={() => {
			partColours.forks = '#120F6C';
			controls?.setPosition(0.8, 0.7, 0.8, true);
			controls?.setTarget(0.2, 0.2, -0.2, true);
			tab = 'forksConfig';
		}}
		class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-full w-full rounded-full bg-[#120F6C]"></div>
	</button>
	<button
		onclick={() => {
			partColours.forks = '#025c8d';
			controls?.setPosition(0.8, 0.7, 0.8, true);
			controls?.setTarget(0.2, 0.2, -0.2, true);
			tab = 'forksConfig';
		}}
		class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-full w-full rounded-full bg-[#025c8d]"></div>
	</button>
	<button
		onclick={() => {
			partColours.forks = '#BF1900';
			controls?.setPosition(0.8, 0.7, 0.8, true);
			controls?.setTarget(0.2, 0.2, -0.2, true);
			tab = 'forksConfig';
		}}
		class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1.25rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-full w-full rounded-full bg-[#BF1900]"></div>
	</button>
	<button
		onclick={() => {
			partColours.forks = '#248048';
			controls?.setPosition(0.8, 0.7, 0.8, true);
			controls?.setTarget(0.2, 0.2, -0.2, true);
			tab = 'forksConfig';
		}}
		class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-full w-full rounded-full bg-[#248048]"></div>
	</button>
	<button
		onclick={() => {
			partColours.forks = '#E8721C';
			controls?.setPosition(0.8, 0.7, 0.8, true);
			controls?.setTarget(0.2, 0.2, -0.2, true);
			tab = 'forksConfig';
		}}
		class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-full w-full rounded-full bg-[#E8721C]"></div>
	</button>
	<button
		onclick={() => {
			partColours.forks = '#d56c7a';
			controls?.setPosition(0.8, 0.7, 0.8, true);
			controls?.setTarget(0.2, 0.2, -0.2, true);
			tab = 'forksConfig';
		}}
		class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-full w-full rounded-full bg-[#d56c7a]"></div>
	</button>
	<button
		onclick={() => {
			partColours.forks = '#ffffff';
			controls?.setPosition(0.8, 0.7, 0.8, true);
			controls?.setTarget(0.2, 0.2, -0.2, true);
			tab = 'forksConfig';
		}}
		class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-full w-full rounded-full bg-[#ffffff]"></div>
	</button>
	<button
		onclick={() => {
			partColours.forks = '#8A8A8A';
			controls?.setPosition(0.8, 0.7, 0.8, true);
			controls?.setTarget(0.2, 0.2, -0.2, true);
			tab = 'forksConfig';
		}}
		class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-full w-full rounded-full bg-[#8A8A8A]"></div>
	</button>
	<button
		onclick={() => {
			partColours.forks = '#151619';
			controls?.setPosition(0.8, 0.7, 0.8, true);
			controls?.setTarget(0.2, 0.2, -0.2, true);
			tab = 'forksConfig';
		}}
		class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-full w-full rounded-full bg-[#151619]"></div>
	</button>
</div>
