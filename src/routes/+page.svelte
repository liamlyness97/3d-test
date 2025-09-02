<script lang="ts">
	import { Canvas } from '@threlte/core';
	import type CC from 'camera-controls';
	import type { Mesh } from 'three';
	import TestScene from '$lib/Scenes/TestScene.svelte';
	import {
		colourMap,
		partColours,
		hexToColourName,
		patternMap,
		polePattern
	} from '$lib/PartColours.svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/state';
	import Configs from '$lib/components/config/Configs.svelte';
	import {
		findMatchingPattern,
		updatePatternToMatch
	} from '$lib/components/helpers/PatternMatch.js';

	let controls = $state<CC>();
	let mesh = $state<Mesh>();

	let enabled = $state(true);

	let tab = $state('start');

	let shareUrl = $state('');
	let copied = $state(false);

	let { data } = $props();

	if (data.frameCol && colourMap[data.frameCol]) {
		partColours.frame = colourMap[data.frameCol];
	}
	if (data.forksCol && colourMap[data.forksCol]) {
		partColours.forks = colourMap[data.forksCol];
	}
	if (data.rearForksCol && colourMap[data.rearForksCol]) {
		partColours.rearForks = colourMap[data.rearForksCol];
	}
	if (data.logoCol) {
		partColours.logo = data.logoCol;
	}
	if (data.logoKeylineCol) {
		partColours.logoKeyline = data.logoKeylineCol;
	}
	if (data.frontLogoCol) {
		partColours.frontLogo = data.frontLogoCol;
	}
	if (data.frontLogoKeylineCol) {
		partColours.frontLogoKeyline = data.frontLogoKeylineCol;
	}
	if (data.poleCol) {
		partColours.pole = data.poleCol;
	}
	if (data.poleKeylineCol) {
		partColours.poleKeyline = data.poleKeylineCol;
	}

	if (data.polePattern) {
		updatePatternToMatch(polePattern, patternMap, data.polePattern);
	}

	let currentPattern: string | null = $derived(findMatchingPattern(polePattern, patternMap));

	$inspect(partColours.rearForks, hexToColourName[partColours.rearForks], 'rear forks');
	$inspect(partColours.frame, hexToColourName[partColours.frame], 'frame');
	$inspect(partColours.forks, hexToColourName[partColours.forks], 'forks');

	console.log(data.poleCol);

	function shareSetup() {
		const frame = hexToColourName[partColours.frame];
		const forks = hexToColourName[partColours.forks];
		const rearForks = hexToColourName[partColours.rearForks];
		const logoKeyLine = partColours.logoKeyline;
		const logo = partColours.logo;
		const frontLogoKeyline = partColours.frontLogoKeyline;
		const frontLogo = partColours.frontLogo;
		const pole = partColours.pole;
		const poleKeyline = partColours.poleKeyline;

		shareUrl = `${page.url.origin}?frame=${frame}&forks=${forks}&logoKeyline=${encodeURIComponent(logoKeyLine)}&logo=${encodeURIComponent(logo)}&frontLogoKeyline=${encodeURIComponent(frontLogoKeyline)}&frontLogo=${encodeURIComponent(frontLogo)}&pole=${encodeURIComponent(pole)}&poleKeyline=${encodeURIComponent(poleKeyline)}&rearForks=${rearForks}&pattern=${currentPattern}`;

		navigator.clipboard.writeText(shareUrl);
		copied = true;

		setTimeout(() => {
			copied = false;
			shareUrl = '';
		}, 5000);
	}
</script>

<div class="h-screen w-full">
	{#if tab == 'start'}
		<div
			class="absolute left-0 right-0 z-50 flex h-full w-full flex-col items-center justify-center bg-brandBlue/50"
		>
			<div class="flex gap-8 font-title">
				<button
					onclick={() => {
						tab = 'default';
					}}
					class="border border-white bg-white px-8 py-3 text-lg font-[600] uppercase tracking-widest text-[#0E1E3E] duration-200 ease-out hover:bg-transparent hover:text-white"
				>
					Start now
				</button>
				<a
					href="https://mercian.alt-developing.net/checkout"
					class="border border-white bg-none px-8 py-3 text-lg font-[600] uppercase tracking-widest text-white duration-200 ease-out hover:bg-white hover:text-[#0E1E3E]"
				>
					Skip and pay deposit
				</a>
			</div>
		</div>
	{/if}
	<div class="fixed top-10 z-[900] flex w-full justify-between px-20">
		<div class="font-body text-lg">
			<p class="text-[#0E1E3E]"><span class="font-[600]">Pro Lugged 44</span> Core package</p>
			<p class="text-[#0E1E3E]">£4854</p>
		</div>
		<div class="relative flex w-1/2 justify-end font-title text-xl">
			{#if !copied}
				<button
					in:fly={{ x: 50, duration: 300, delay: 200 }}
					out:fly={{ x: 50, duration: 200 }}
					onclick={shareSetup}
					class="absolute flex items-center gap-2 text-[#0E1E3E] duration-200 hover:opacity-75"
					>Share
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13.5 8.35938V9.10938C13.5 11.5842 13.5 12.8216 12.7311 13.5905C11.9623 14.3594 10.7249 14.3594 8.25003 14.3594H6.75003C4.27513 14.3594 3.03769 14.3594 2.26885 13.5905C1.5 12.8216 1.5 11.5842 1.5 9.10938V7.60938C1.5 5.1345 1.5 3.89706 2.26885 3.12822C3.03769 2.35937 4.27513 2.35938 6.75003 2.35938H7.50003"
							stroke="#0E1E3E"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M9.75 0.859375H12.75C13.8106 0.859375 14.341 0.859375 14.6705 1.18888C15 1.51839 15 2.04872 15 3.10938V6.10938M14.25 1.60938L7.5 8.35938"
							stroke="#0E1E3E"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			{:else}
				<span
					in:fly={{ x: 50, duration: 300, delay: 200 }}
					out:fly={{ x: 50, duration: 200 }}
					class="absolute flex w-full items-center justify-end gap-2 text-[#5DE100] duration-200 hover:opacity-75"
				>
					<p class=" mt-1 text-[#5DE100]">Share Link Copied</p>
					<iconify-icon icon="teenyicons:clipboard-tick-solid"></iconify-icon>
				</span>
			{/if}
		</div>
	</div>

	<!-- Configs -->
	<Configs bind:tab bind:controls />

	<Canvas>
		<TestScene bind:controls bind:mesh />
	</Canvas>

	<div
		class="fixed bottom-0 left-0 flex w-full items-center justify-between bg-brandOrange px-20 py-3"
	>
		<div class="flex items-center gap-6 text-white">
			<p class="font-title text-2xl font-normal uppercase tracking-widest">
				Pick your colour & pay deposit
			</p>
			<p class="font-body text-xl">£1,200</p>
		</div>
		<div>
			<a
				href="https://mercian.alt-developing.net/checkout"
				class="border border-white px-6 py-3 font-title font-light uppercase text-white duration-200 hover:bg-white hover:text-[#0E1E3E]"
			>
				Pay To Secure
			</a>
		</div>
	</div>
</div>
