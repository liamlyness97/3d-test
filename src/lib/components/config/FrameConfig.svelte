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
				colourTab = 'enamel';
				controls?.setPosition(0.1, 0.7, 1.5, true);
				controls?.setTarget(0.2, 0.2, -0.9, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Enamel"
		>
			Enamel
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

{#if colourTab == 'enamel'}
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
			{#each materials.enamel.colours as colour}
				<button
					onclick={() => {
						partsConfig.frame.colour = colour.colour;
						partsConfig.frame.colourName = colour.name;
						partsConfig.frame.colourNumber = colour.number;
						partsConfig.frame.roughness = materials.enamel.roughness;
						partsConfig.frame.metalness = materials.enamel.metalness;
						partsConfig.frame.transmission = materials.enamel.transmission;
						partsConfig.frame.transparent = materials.enamel.transparent;
						partsConfig.frame.clearcoat = materials.enamel.clearcoat;
						partsConfig.frame.normalMap = false;
						partsConfig.frame.normalScale = [0, 0];
						partsConfig.frame.clearcoatRougness = materials.enamel.clearcoatRougness;
						partsConfig.frame.materialType = 'enamel';
						controls?.setPosition(0.1, 0.7, 1.5, true);
						controls?.setTarget(0.2, 0.2, -0.9, true);
						tab = 'frameConfig';
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
						partsConfig.frame.colourName = colour.name;
						partsConfig.frame.colourNumber = colour.number;
						partsConfig.frame.roughness = materials.pearl.roughness;
						partsConfig.frame.metalness = materials.pearl.metalness;
						partsConfig.frame.transmission = materials.pearl.transmission;
						partsConfig.frame.transparent = materials.pearl.transparent;
						partsConfig.frame.clearcoat = materials.pearl.clearcoat;
						partsConfig.frame.normalMap = materials.pearl.normalMap;
						partsConfig.frame.normalScale = [
							materials.pearl.normalScale[0],
							materials.pearl.normalScale[1]
						];
						partsConfig.frame.clearcoatRougness = materials.pearl.clearcoatRougness;
						partsConfig.frame.materialType = 'pearl';
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
