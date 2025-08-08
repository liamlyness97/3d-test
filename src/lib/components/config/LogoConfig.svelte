<script lang="ts">
	import type CC from 'camera-controls';
	import { fly } from 'svelte/transition';
	import { partColours } from '$lib/PartColours.svelte';

	let { tab = $bindable(), controls = $bindable() }: { tab: string; controls: CC } = $props();
	let subTab = $state('none');
</script>

{#if subTab == 'none'}
	<!-- Pole Options -->
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
				subTab = 'logoColour';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
			}}
			class="border-brandBlue flex -translate-y-0 items-center justify-center rounded-full border bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Logo"
		>
			Logo Colour
		</button>
		<button
			onclick={() => {
				subTab = 'logoKeyline';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
			}}
			class="border-brandBlue flex -translate-y-0 items-center justify-center rounded-full border bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Logo"
		>
			Logo Keyline
		</button>
	</div>
{/if}

{#if subTab == 'logoColour'}
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
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1.25rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Back"
		>
			<iconify-icon icon="material-symbols-light:arrow-back"></iconify-icon>
		</button>

		<button
			onclick={() => {
				partColours.logo = '#025c8d';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
				tab = 'logoConfig';
			}}
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#025c8d]"></div>
		</button>
		<button
			onclick={() => {
				partColours.logo = '#560606';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
				tab = 'logoConfig';
			}}
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#560606]"></div>
		</button>
		<button
			onclick={() => {
				partColours.logo = '#033a1d';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
				tab = 'logoConfig';
			}}
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#033a1d]"></div>
		</button>
		<button
			onclick={() => {
				partColours.logo = '#b2391b';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
				tab = 'logoConfig';
			}}
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#b2391b]"></div>
		</button>
		<button
			onclick={() => {
				partColours.logo = '#d56c7a';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
				tab = 'logoConfig';
			}}
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#d56c7a]"></div>
		</button>
		<button
			onclick={() => {
				partColours.logo = '#ffffff';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
				tab = 'logoConfig';
			}}
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full border bg-[#ffffff]"></div>
		</button>
		<button
			onclick={() => {
				partColours.logo = '#151619';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
				tab = 'logoConfig';
			}}
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#151619]"></div>
		</button>
	</div>
{/if}

{#if subTab == 'logoKeyline'}
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
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1.25rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Back"
		>
			<iconify-icon icon="material-symbols-light:arrow-back"></iconify-icon>
		</button>

		<button
			onclick={() => {
				partColours.logoKeyline = '#025c8d';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
			}}
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#025c8d]"></div>
		</button>
		<button
			onclick={() => {
				partColours.logoKeyline = '#560606';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
			}}
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#560606]"></div>
		</button>
		<button
			onclick={() => {
				partColours.logoKeyline = '#033a1d';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
			}}
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#033a1d]"></div>
		</button>
		<button
			onclick={() => {
				partColours.logoKeyline = '#b2391b';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
			}}
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#b2391b]"></div>
		</button>
		<button
			onclick={() => {
				partColours.logoKeyline = '#d56c7a';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
			}}
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#d56c7a]"></div>
		</button>
		<button
			onclick={() => {
				partColours.logoKeyline = '#ffffff';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
			}}
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full border bg-[#ffffff]"></div>
		</button>
		<button
			onclick={() => {
				partColours.logoKeyline = '#151619';
				controls?.setPosition(0.4, 0.8, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.3, true);
			}}
			class="border-brandBlue flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#151619]"></div>
		</button>
	</div>
{/if}
