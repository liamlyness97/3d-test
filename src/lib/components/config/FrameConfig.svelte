<script lang="ts">
	import type CC from 'camera-controls';
	import { fly } from 'svelte/transition';
	import { colourMap, partColours } from '$lib/PartColours.svelte';
	import { materials, partsConfig } from '$lib/Materials.svelte';

	let { tab = $bindable(), controls = $bindable() }: { tab: string; controls: CC } = $props();

	let colourTab = $state('none');
</script>

<!-- Frame Config -->
{#if colourTab == 'none'}
	<div
		class="fixed bottom-24 z-50 flex w-full justify-center gap-4"
		in:fly={{ duration: 300, delay: 200, y: 20 }}
		out:fly={{ duration: 200, y: 20 }}
	>
		<button
			onclick={() => {
				tab = 'default';
				colourTab = 'none';
				controls?.setPosition(0.1, 0.7, 1.5, true);
				controls?.setTarget(0.2, 0.2, -0.9, true);
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1.25rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Back"
		>
			<iconify-icon icon="material-symbols-light:arrow-back"></iconify-icon>
		</button>
		<button
			onclick={() => {
				colourTab = 'pearl';
				controls?.setPosition(0.1, 0.7, 1.5, true);
				controls?.setTarget(0.2, 0.2, -0.9, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Pearl"
		>
			Pearl
		</button>
	</div>
{/if}

{#if colourTab == 'pearl'}
	<div
		class="fixed bottom-24 z-50 flex w-full flex-col-reverse items-center justify-center gap-4"
		in:fly={{ duration: 300, delay: 200, y: 20 }}
		out:fly={{ duration: 200, y: 20 }}
	>
		<button
			onclick={() => {
				colourTab = 'none';
				controls?.setPosition(0.1, 0.7, 1.5, true);
				controls?.setTarget(0.2, 0.2, -0.9, true);
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1.25rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Back"
		>
			<iconify-icon icon="material-symbols-light:arrow-back"></iconify-icon>
		</button>
		<div class="grid grid-cols-10 justify-center gap-4">
			{#each materials.pearl.colours as colour}
				<button
					onclick={() => {
						partsConfig.frame.colour = colour.colour;
						partsConfig.forks.colourName = colour.name;
						partsConfig.forks.colourNumber = colour.number;
						partsConfig.forks.roughness = materials.pearl.roughness;
						partsConfig.forks.metalness = materials.pearl.metalness;
						partsConfig.forks.transmission = materials.pearl.transmission;
						partsConfig.forks.transparent = materials.pearl.transparent;
						partsConfig.forks.clearcoat = materials.pearl.clearcoat;
						partsConfig.forks.normalMap = materials.pearl.normalMap;
						partsConfig.forks.normalScale = [
							materials.pearl.normalScale[0],
							materials.pearl.normalScale[1]
						];
						partsConfig.forks.clearcoatRougness = materials.pearl.clearcoatRougness;
						partsConfig.forks.materialType = 'pearl';
						controls?.setPosition(0.1, 0.7, 1.5, true);
						controls?.setTarget(0.2, 0.2, -0.9, true);
					}}
					class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
					aria-label="Frame"
				>
					<div style="background: {colour.colour}" class="h-full w-full rounded-full"></div>
				</button>
			{/each}
		</div>
	</div>
{/if}
