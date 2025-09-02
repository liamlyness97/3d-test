<script lang="ts">
	import type CC from 'camera-controls';
	import { fly } from 'svelte/transition';
	import { partColours, patternMap, polePattern } from '$lib/PartColours.svelte';
	import { updatePatternToMatch } from '../helpers/PatternMatch';

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
				subTab = 'polePattern';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Pole"
		>
			Pole Pattern
		</button>
		<button
			onclick={() => {
				subTab = 'poleColour';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Pole"
		>
			Pole Colour
		</button>
		<button
			onclick={() => {
				subTab = 'poleKeyline';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Pole"
		>
			Pole Keyline
		</button>
	</div>
{/if}

{#if subTab == 'polePattern'}
	<!-- Pole Colour -->
	<div
		class="fixed bottom-24 z-50 flex w-full justify-center gap-4 font-title"
		in:fly={{ duration: 300, delay: 200, y: 20 }}
		out:fly={{ duration: 200, y: 20 }}
	>
		<button
			onclick={() => {
				subTab = 'none';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1.25rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Back"
		>
			<iconify-icon icon="material-symbols-light:arrow-back"></iconify-icon>
		</button>

		<button
			onclick={() => {
				tab = 'poleConfig';
				subTab = 'none';
				updatePatternToMatch(polePattern, patternMap, 'barber');
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Pole"
		>
			Barber Pole
		</button>

		<button
			onclick={() => {
				tab = 'poleConfig';
				subTab = 'none';
				updatePatternToMatch(polePattern, patternMap, 'solid');
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Pole"
		>
			Solid Pole
		</button>
		<button
			onclick={() => {
				tab = 'poleConfig';
				subTab = 'none';
				updatePatternToMatch(polePattern, patternMap, 'split');
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Pole"
		>
			Split Pole
		</button>
		<button
			onclick={() => {
				tab = 'poleConfig';
				subTab = 'none';
				updatePatternToMatch(polePattern, patternMap, 'none');
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Pole"
		>
			No Pattern
		</button>
	</div>
{/if}

{#if subTab == 'poleColour'}
	<!-- Pole Colour -->
	<div
		class="fixed bottom-24 z-50 flex w-full justify-center gap-4"
		in:fly={{ duration: 300, delay: 200, y: 20 }}
		out:fly={{ duration: 200, y: 20 }}
	>
		<button
			onclick={() => {
				subTab = 'none';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
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
				bind:value={partColours.pole}
				name="logo"
				class="h-[5rem] w-[5rem] scale-125 cursor-pointer rounded-full bg-cover object-cover"
			/>
		</div>
	</div>
{/if}

{#if subTab == 'poleKeyline'}
	<!-- Pole Colour -->
	<div
		class="fixed bottom-24 z-50 flex w-full justify-center gap-4"
		in:fly={{ duration: 300, delay: 200, y: 20 }}
		out:fly={{ duration: 200, y: 20 }}
	>
		<button
			onclick={() => {
				subTab = 'none';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
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
				bind:value={partColours.poleKeyline}
				name="logo"
				class="h-[5rem] w-[5rem] scale-125 cursor-pointer rounded-full bg-cover object-cover"
			/>
		</div>
	</div>
{/if}
