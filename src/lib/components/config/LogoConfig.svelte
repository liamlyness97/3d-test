<script lang="ts">
	import type CC from 'camera-controls';
	import { fly } from 'svelte/transition';
	import { partColours } from '$lib/PartColours.svelte';

	let { tab = $bindable(), controls = $bindable() }: { tab: string; controls: CC } = $props();
</script>

<!-- Frame Config -->
<div
	class="fixed bottom-10 z-50 flex w-full justify-center gap-4"
	in:fly={{ duration: 300, delay: 200, y: 20 }}
	out:fly={{ duration: 200, y: 20 }}
>
	<button
		onclick={() => {
			tab = 'default';
			controls?.setPosition(0, 0.5, 2, true);
			controls?.setTarget(0, 0.5, 0, true);
		}}
		class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1.25rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Back"
	>
		<iconify-icon icon="material-symbols-light:arrow-back"></iconify-icon>
	</button>
	<button
		onclick={() => {
			partColours.logo = '#ffffff';

			tab = 'logoConfig';
		}}
		class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-7 w-7 rounded-full border bg-[#ffffff]"></div>
	</button>
	<button
		onclick={() => {
			partColours.logo = '#025c8d';

			tab = 'logoConfig';
		}}
		class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-7 w-7 rounded-full bg-[#025c8d]"></div>
	</button>
	<button
		onclick={() => {
			partColours.logo = '#560606';

			tab = 'logoConfig';
		}}
		class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-7 w-7 rounded-full bg-[#560606]"></div>
	</button>
	<button
		onclick={() => {
			partColours.logo = '#033a1d';

			tab = 'logoConfig';
		}}
		class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-7 w-7 rounded-full bg-[#033a1d]"></div>
	</button>
	<button
		onclick={() => {
			partColours.logo = '#b2391b';

			tab = 'logoConfig';
		}}
		class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-7 w-7 rounded-full bg-[#b2391b]"></div>
	</button>
	<button
		onclick={() => {
			partColours.logo = '#d56c7a';

			tab = 'logoConfig';
		}}
		class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-7 w-7 rounded-full bg-[#d56c7a]"></div>
	</button>
	<button
		onclick={() => {
			partColours.logo = '#151619';

			tab = 'logoConfig';
		}}
		class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
		aria-label="Frame"
	>
		<div class="h-7 w-7 rounded-full bg-[#151619]"></div>
	</button>
</div>
