<script lang="ts">
	import type CC from 'camera-controls';
	import { fly } from 'svelte/transition';
	import { partColours, polePattern } from '$lib/PartColours.svelte';

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
				polePattern.barber = true;
				polePattern.barberKeyline = true;
				polePattern.poleMiddle = false;
				polePattern.poleTopKeyline = false;
				polePattern.poleBottomKeyline = false;
				polePattern.poleTopGap = false;
				polePattern.poleTop = false;
				polePattern.poleBottom = false;
				polePattern.poleBottomGap = false;
				polePattern.poleTopGapTopKeyline = false;
				polePattern.poleTopGapBottomKeyline = false;
				polePattern.poleBottomGapBottomKeyline = false;
				polePattern.poleBottomGapTopKeyline = false;
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
				polePattern.barber = false;
				polePattern.barberKeyline = false;
				polePattern.poleMiddle = true;
				polePattern.poleTopKeyline = true;
				polePattern.poleBottomKeyline = true;
				polePattern.poleTopGap = true;
				polePattern.poleTop = true;
				polePattern.poleBottom = true;
				polePattern.poleBottomGap = true;
				polePattern.poleTopGapTopKeyline = false;
				polePattern.poleTopGapBottomKeyline = false;
				polePattern.poleBottomGapBottomKeyline = false;
				polePattern.poleBottomGapTopKeyline = false;
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
				polePattern.barber = false;
				polePattern.barberKeyline = false;
				polePattern.poleMiddle = true;
				polePattern.poleTopKeyline = true;
				polePattern.poleBottomKeyline = true;
				polePattern.poleTopGap = false;
				polePattern.poleTop = true;
				polePattern.poleBottom = true;
				polePattern.poleBottomGap = false;
				polePattern.poleTopGapTopKeyline = true;
				polePattern.poleTopGapBottomKeyline = true;
				polePattern.poleBottomGapBottomKeyline = true;
				polePattern.poleBottomGapTopKeyline = true;
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
				polePattern.barber = false;
				polePattern.barberKeyline = false;
				polePattern.poleMiddle = false;
				polePattern.poleTopKeyline = false;
				polePattern.poleBottomKeyline = false;
				polePattern.poleTopGap = false;
				polePattern.poleTop = false;
				polePattern.poleBottom = false;
				polePattern.poleBottomGap = false;
				polePattern.poleTopGapTopKeyline = false;
				polePattern.poleTopGapBottomKeyline = false;
				polePattern.poleBottomGapBottomKeyline = false;
				polePattern.poleBottomGapTopKeyline = false;
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
		<button
			onclick={() => {
				partColours.pole = '#120F6C';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#120F6C]"></div>
		</button>
		<button
			onclick={() => {
				partColours.pole = '#025c8d';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#025c8d]"></div>
		</button>
		<button
			onclick={() => {
				partColours.pole = '#BF1900';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#BF1900]"></div>
		</button>
		<button
			onclick={() => {
				partColours.pole = '#248048';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#248048]"></div>
		</button>
		<button
			onclick={() => {
				partColours.pole = '#E8721C';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#E8721C]"></div>
		</button>
		<button
			onclick={() => {
				partColours.pole = '#d56c7a';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#d56c7a]"></div>
		</button>
		<button
			onclick={() => {
				partColours.pole = '#5c1970';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#5c1970]"></div>
		</button>
		<button
			onclick={() => {
				partColours.pole = '#ffffff';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#ffffff]"></div>
		</button>
		<button
			onclick={() => {
				partColours.pole = '#8A8A8A';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#8A8A8A]"></div>
		</button>
		<button
			onclick={() => {
				partColours.pole = '#151619';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#151619]"></div>
		</button>
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
		<button
			onclick={() => {
				partColours.poleKeyline = '#120F6C';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#120F6C]"></div>
		</button>
		<button
			onclick={() => {
				partColours.poleKeyline = '#025c8d';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#025c8d]"></div>
		</button>
		<button
			onclick={() => {
				partColours.poleKeyline = '#BF1900';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#BF1900]"></div>
		</button>
		<button
			onclick={() => {
				partColours.poleKeyline = '#248048';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#248048]"></div>
		</button>
		<button
			onclick={() => {
				partColours.poleKeyline = '#E8721C';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#E8721C]"></div>
		</button>
		<button
			onclick={() => {
				partColours.poleKeyline = '#d56c7a';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#d56c7a]"></div>
		</button>
		<button
			onclick={() => {
				partColours.poleKeyline = '#5c1970';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#5c1970]"></div>
		</button>
		<button
			onclick={() => {
				partColours.poleKeyline = '#ffffff';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#ffffff]"></div>
		</button>
		<button
			onclick={() => {
				partColours.poleKeyline = '#8A8A8A';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#8A8A8A]"></div>
		</button>
		<button
			onclick={() => {
				partColours.poleKeyline = '#151619';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
				tab = 'poleConfig';
			}}
			class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
			aria-label="Frame"
		>
			<div class="h-full w-full rounded-full bg-[#151619]"></div>
		</button>
	</div>
{/if}
