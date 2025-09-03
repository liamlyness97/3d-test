<script lang="ts">
	import { materials, partsConfig } from '$lib/Materials.svelte';
	import { fly } from 'svelte/transition';

	let { subTab = $bindable(), controls = $bindable() } = $props();

	let colourTab = $state('none');
</script>

{#if colourTab == 'none'}
	<div
		class="fixed bottom-24 z-50 flex w-full justify-center gap-4"
		in:fly={{ duration: 300, delay: 200, y: 20 }}
		out:fly={{ duration: 200, y: 20 }}
	>
		<button
			onclick={() => {
				subTab = 'none';
				controls?.setPosition(-0.7, 0.7, 0.8, true);
				controls?.setTarget(0, 0.3, -0.2, true);
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1.25rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Back"
		>
			<iconify-icon icon="material-symbols-light:arrow-back"></iconify-icon>
		</button>
		<button
			onclick={() => {
				colourTab = 'enamel';
				controls?.setPosition(0.8, 0.7, 0.8, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Pearl"
		>
			Enamel
		</button>
		<button
			onclick={() => {
				colourTab = 'pearl';
				controls?.setPosition(0.8, 0.7, 0.8, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
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
				controls?.setPosition(0.8, 0.7, 0.8, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
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
						partsConfig.rearForksBracket.colour = colour.colour;
						partsConfig.rearForksBracket.colourName = colour.name;
						partsConfig.rearForksBracket.colourNumber = colour.number;
						partsConfig.rearForksBracket.roughness = materials.enamel.roughness;
						partsConfig.rearForksBracket.metalness = materials.enamel.metalness;
						partsConfig.rearForksBracket.transmission = materials.enamel.transmission;
						partsConfig.rearForksBracket.transparent = materials.enamel.transparent;
						partsConfig.rearForksBracket.clearcoat = materials.enamel.clearcoat;
						partsConfig.rearForksBracket.normalMap = false;
						partsConfig.rearForksBracket.normalScale = [0, 0];
						partsConfig.rearForksBracket.clearcoatRougness = materials.enamel.clearcoatRougness;
						partsConfig.rearForksBracket.materialType = 'enamel';
						controls?.setPosition(0.8, 0.7, 0.8, true);
						controls?.setTarget(0.2, 0.2, -0.2, true);
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
				controls?.setPosition(0.8, 0.7, 0.8, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
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
						partsConfig.rearForksBracket.colour = colour.colour;
						partsConfig.rearForksBracket.colourName = colour.name;
						partsConfig.rearForksBracket.colourNumber = colour.number;
						partsConfig.rearForksBracket.roughness = materials.pearl.roughness;
						partsConfig.rearForksBracket.metalness = materials.pearl.metalness;
						partsConfig.rearForksBracket.transmission = materials.pearl.transmission;
						partsConfig.rearForksBracket.transparent = materials.pearl.transparent;
						partsConfig.rearForksBracket.clearcoat = materials.pearl.clearcoat;
						partsConfig.rearForksBracket.normalMap = materials.pearl.normalMap;
						partsConfig.rearForksBracket.normalScale = [...materials.pearl.normalScale];
						partsConfig.rearForksBracket.clearcoatRougness = materials.pearl.clearcoatRougness;
						partsConfig.rearForksBracket.materialType = 'pearl';
						controls?.setPosition(0.8, 0.7, 0.8, true);
						controls?.setTarget(0.2, 0.2, -0.2, true);
					}}
					class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
					aria-label="Rear Forks"
				>
					<div style="background: {colour.colour}" class="h-full w-full rounded-full"></div>
				</button>
			{/each}
		</div>
	</div>
{/if}
