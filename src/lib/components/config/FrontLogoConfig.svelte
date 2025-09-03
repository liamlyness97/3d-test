<script lang="ts">
	import type CC from 'camera-controls';
	import { fly } from 'svelte/transition';
	import { partColours } from '$lib/PartColours.svelte';
	import { partsConfig } from '$lib/Materials.svelte';

	let { tab = $bindable(), controls = $bindable() }: { tab: string; controls: CC } = $props();
	let subTab = $state('none');
</script>

{#if subTab == 'none'}
	<!-- Pole Options -->
	<div
		class="fixed bottom-24 z-50 flex w-full justify-center gap-4 font-title uppercase"
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
		<button
			onclick={() => {
				subTab = 'frontLogoColour';
				controls?.setPosition(0.9, 0.8, 0.2, true);
				controls?.setTarget(0, 0.5, -0.3, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Logo"
		>
			Front Logo Colour
		</button>
		<button
			onclick={() => {
				subTab = 'frontLogoKeyline';
				controls?.setPosition(0.9, 0.8, 0.2, true);
				controls?.setTarget(0, 0.5, -0.3, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Logo"
		>
			Front Logo Keyline
		</button>
	</div>
{/if}

{#if subTab == 'frontLogoColour'}
	<!-- Logo Config -->
	<div
		class="fixed bottom-24 z-50 flex w-full justify-center gap-4"
		in:fly={{ duration: 300, delay: 200, y: 20 }}
		out:fly={{ duration: 200, y: 20 }}
	>
		<button
			onclick={() => {
				subTab = 'none';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1.25rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Back"
		>
			<iconify-icon icon="material-symbols-light:arrow-back"></iconify-icon>
		</button>

		<div
			class="flex h-10 w-10 -translate-y-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-brandBlue"
		>
			<input
				type="color"
				bind:value={partsConfig.frontLogo}
				name="logo"
				class="h-[5rem] w-[5rem] scale-125 cursor-pointer rounded-full bg-cover object-cover"
			/>
		</div>
	</div>
{/if}

{#if subTab == 'frontLogoKeyline'}
	<!-- Logo Config -->
	<div
		class="fixed bottom-24 z-50 flex w-full justify-center gap-4"
		in:fly={{ duration: 300, delay: 200, y: 20 }}
		out:fly={{ duration: 200, y: 20 }}
	>
		<button
			onclick={() => {
				subTab = 'none';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1.25rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Back"
		>
			<iconify-icon icon="material-symbols-light:arrow-back"></iconify-icon>
		</button>

		<div
			class="flex h-10 w-10 -translate-y-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-brandBlue"
		>
			<input
				type="color"
				bind:value={partsConfig.frontLogoKeyline}
				name="logoKeyline"
				class="h-[5rem] w-[5rem] scale-125 cursor-pointer rounded-full bg-cover object-cover"
			/>
		</div>
	</div>
{/if}
