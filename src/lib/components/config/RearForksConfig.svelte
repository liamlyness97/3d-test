<script lang="ts">
	import type CC from 'camera-controls';
	import { fly } from 'svelte/transition';
	import { colourMap, partColours } from '$lib/PartColours.svelte';
	import TopTube from './rearForkTabs/TopTube.svelte';
	import BottomTube from './rearForkTabs/BottomTube.svelte';
	import Bracket from './rearForkTabs/Bracket.svelte';
	import Arch from './rearForkTabs/Arch.svelte';

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
				subTab = 'topTubes';
				controls?.setPosition(-0.7, 0.7, 0.8, true);
				controls?.setTarget(0, 0.3, -0.2, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Tube"
		>
			Top Tubes
		</button>
		<button
			onclick={() => {
				subTab = 'bottomTubes';
				controls?.setPosition(-0.7, 0.7, 0.8, true);
				controls?.setTarget(0, 0.3, -0.2, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Tube"
		>
			Bottom Tubes
		</button>
		<button
			onclick={() => {
				subTab = 'bracket';
				controls?.setPosition(-0.7, 0.7, 0.8, true);
				controls?.setTarget(0, 0.3, -0.2, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Tube"
		>
			Bracket
		</button>
		<button
			onclick={() => {
				subTab = 'arch';
				controls?.setPosition(-0.7, 0.7, 0.8, true);
				controls?.setTarget(0, 0.3, -0.2, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Arch"
		>
			Arch
		</button>
	</div>
{/if}

{#if subTab == 'topTubes'}
	<TopTube bind:subTab />
{/if}

{#if subTab == 'bottomTubes'}
	<BottomTube bind:subTab />
{/if}

{#if subTab == 'bracket'}
	<Bracket bind:subTab />
{/if}

{#if subTab == 'arch'}
	<Arch bind:subTab />
{/if}
