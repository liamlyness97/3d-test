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
	import { materials, partsConfig } from '$lib/Materials.svelte.js';

	let controls = $state<CC>();
	let mesh = $state<Mesh>();

	let enabled = $state(true);

	let tab = $state('start');

	let shareUrl = $state('');
	let copied = $state(false);

	let { data } = $props();

	function findColour(array, value) {
		const colour = array.find((colour) => colour['number'] === value);
		return colour.colour;
	}

	function findColourName(array, value) {
		const colour = array.find((colour) => colour['number'] === value);
		return colour.name;
	}

	if (data.bikeSetup.frame.colourNumber) {
		partsConfig.frame = {
			colour: findColour(
				materials[data.bikeSetup.frame.material].colours,
				Number(data.bikeSetup.frame.colourNumber)
			),
			colourName: findColourName(
				materials[data.bikeSetup.frame.material].colours,
				Number(data.bikeSetup.frame.colourNumber)
			),
			colourNumber: Number(data.bikeSetup.frame.colourNumber),
			roughness: materials[data.bikeSetup.frame.material].roughness,
			metalness: materials[data.bikeSetup.frame.material].metalness,
			transmission: materials[data.bikeSetup.frame.material].transmission,
			transparent: materials[data.bikeSetup.frame.material].transparent,
			clearcoat: materials[data.bikeSetup.frame.material].clearcoat,
			normalMap: true,
			normalScale: [
				materials[data.bikeSetup.frame.material].normalScale[0],
				materials[data.bikeSetup.frame.material].normalScale[1]
			],
			clearcoatRougness: materials[data.bikeSetup.frame.material].clearcoatRoughness,
			materialType: `${data.bikeSetup.frame.material}`
		};
	}
	if (data.bikeSetup.forks.colourNumber) {
		partsConfig.forks = {
			colour: findColour(
				materials[data.bikeSetup.forks.material].colours,
				Number(data.bikeSetup.forks.colourNumber)
			),
			colourName: findColourName(
				materials[data.bikeSetup.forks.material].colours,
				Number(data.bikeSetup.forks.colourNumber)
			),
			colourNumber: Number(data.bikeSetup.forks.colourNumber),
			roughness: materials[data.bikeSetup.forks.material].roughness,
			metalness: materials[data.bikeSetup.forks.material].metalness,
			transmission: materials[data.bikeSetup.forks.material].transmission,
			transparent: materials[data.bikeSetup.forks.material].transparent,
			clearcoat: materials[data.bikeSetup.forks.material].clearcoat,
			normalMap: true,
			normalScale: [
				materials[data.bikeSetup.forks.material].normalScale[0],
				materials[data.bikeSetup.forks.material].normalScale[1]
			],
			clearcoatRougness: materials[data.bikeSetup.forks.material].clearcoatRoughness,
			materialType: `${data.bikeSetup.forks.material}`
		};
	}
	if (data.bikeSetup.rearForksTop.colourNumber) {
		partsConfig.rearForksTop = {
			colour: findColour(
				materials[data.bikeSetup.rearForksTop.material].colours,
				Number(data.bikeSetup.rearForksTop.colourNumber)
			),
			colourName: findColourName(
				materials[data.bikeSetup.rearForksTop.material].colours,
				Number(data.bikeSetup.rearForksTop.colourNumber)
			),
			colourNumber: Number(data.bikeSetup.rearForksTop.colourNumber),
			roughness: materials[data.bikeSetup.rearForksTop.material].roughness,
			metalness: materials[data.bikeSetup.rearForksTop.material].metalness,
			transmission: materials[data.bikeSetup.rearForksTop.material].transmission,
			transparent: materials[data.bikeSetup.rearForksTop.material].transparent,
			clearcoat: materials[data.bikeSetup.rearForksTop.material].clearcoat,
			normalMap: true,
			normalScale: [
				materials[data.bikeSetup.rearForksTop.material].normalScale[0],
				materials[data.bikeSetup.rearForksTop.material].normalScale[1]
			],
			clearcoatRougness: materials[data.bikeSetup.rearForksTop.material].clearcoatRoughness,
			materialType: `${data.bikeSetup.rearForksTop.material}`
		};
	}
	if (data.bikeSetup.rearForksBottom.colourNumber) {
		partsConfig.rearForksBottom = {
			colour: findColour(
				materials[data.bikeSetup.rearForksBottom.material].colours,
				Number(data.bikeSetup.rearForksBottom.colourNumber)
			),
			colourName: findColourName(
				materials[data.bikeSetup.rearForksBottom.material].colours,
				Number(data.bikeSetup.rearForksBottom.colourNumber)
			),
			colourNumber: Number(data.bikeSetup.rearForksBottom.colourNumber),
			roughness: materials[data.bikeSetup.rearForksBottom.material].roughness,
			metalness: materials[data.bikeSetup.rearForksBottom.material].metalness,
			transmission: materials[data.bikeSetup.rearForksBottom.material].transmission,
			transparent: materials[data.bikeSetup.rearForksBottom.material].transparent,
			clearcoat: materials[data.bikeSetup.rearForksBottom.material].clearcoat,
			normalMap: true,
			normalScale: [
				materials[data.bikeSetup.rearForksBottom.material].normalScale[0],
				materials[data.bikeSetup.rearForksBottom.material].normalScale[1]
			],
			clearcoatRougness: materials[data.bikeSetup.rearForksBottom.material].clearcoatRoughness,
			materialType: `${data.bikeSetup.rearForksBottom.material}`
		};
	}
	if (data.bikeSetup.rearForksBracket.colourNumber) {
		partsConfig.rearForksBracket = {
			colour: findColour(
				materials[data.bikeSetup.rearForksBracket.material].colours,
				Number(data.bikeSetup.rearForksBracket.colourNumber)
			),
			colourName: findColourName(
				materials[data.bikeSetup.rearForksBracket.material].colours,
				Number(data.bikeSetup.rearForksBracket.colourNumber)
			),
			colourNumber: Number(data.bikeSetup.rearForksBracket.colourNumber),
			roughness: materials[data.bikeSetup.rearForksBracket.material].roughness,
			metalness: materials[data.bikeSetup.rearForksBracket.material].metalness,
			transmission: materials[data.bikeSetup.rearForksBracket.material].transmission,
			transparent: materials[data.bikeSetup.rearForksBracket.material].transparent,
			clearcoat: materials[data.bikeSetup.rearForksBracket.material].clearcoat,
			normalMap: true,
			normalScale: [
				materials[data.bikeSetup.rearForksBracket.material].normalScale[0],
				materials[data.bikeSetup.rearForksBracket.material].normalScale[1]
			],
			clearcoatRougness: materials[data.bikeSetup.rearForksBracket.material].clearcoatRoughness,
			materialType: `${data.bikeSetup.rearForksBracket.material}`
		};
	}
	if (data.bikeSetup.rearForksArch.colourNumber) {
		partsConfig.rearForksArch = {
			colour: findColour(
				materials[data.bikeSetup.rearForksArch.material].colours,
				Number(data.bikeSetup.rearForksArch.colourNumber)
			),
			colourName: findColourName(
				materials[data.bikeSetup.rearForksArch.material].colours,
				Number(data.bikeSetup.rearForksArch.colourNumber)
			),
			colourNumber: Number(data.bikeSetup.rearForksArch.colourNumber),
			roughness: materials[data.bikeSetup.rearForksArch.material].roughness,
			metalness: materials[data.bikeSetup.rearForksArch.material].metalness,
			transmission: materials[data.bikeSetup.rearForksArch.material].transmission,
			transparent: materials[data.bikeSetup.rearForksArch.material].transparent,
			clearcoat: materials[data.bikeSetup.rearForksArch.material].clearcoat,
			normalMap: true,
			normalScale: [
				materials[data.bikeSetup.rearForksArch.material].normalScale[0],
				materials[data.bikeSetup.rearForksArch.material].normalScale[1]
			],
			clearcoatRougness: materials[data.bikeSetup.rearForksArch.material].clearcoatRoughness,
			materialType: `${data.bikeSetup.rearForksArch.material}`
		};
	}
	if (data.bikeSetup.logo != 'null') {
		partsConfig.logo = data.bikeSetup.logo;
	}
	if (data.bikeSetup.logoKeyline != 'null') {
		partsConfig.logoKeyline = data.bikeSetup.logoKeyline;
	}
	if (data.bikeSetup.frontLogo != 'null') {
		partsConfig.frontLogo = data.bikeSetup.frontLogo;
	}
	if (data.bikeSetup.frontLogoKeyline != 'null') {
		partsConfig.frontLogoKeyline = data.bikeSetup.frontLogoKeyline;
	}
	if (data.bikeSetup.pole != 'null') {
		partsConfig.pole = data.bikeSetup.pole;
	}
	if (data.bikeSetup.poleKeyline != 'null') {
		partsConfig.poleKeyline = data.bikeSetup.poleKeyline;
	}

	if (data.bikeSetup.polePattern) {
		updatePatternToMatch(polePattern, patternMap, data.bikeSetup.polePattern);
	}

	let currentPattern: string | null = $derived(findMatchingPattern(polePattern, patternMap));

	function shareSetup() {
		const frame = encodeURIComponent(
			`${partsConfig.frame.materialType} ${partsConfig.frame.colourNumber}`
		);
		const forks = encodeURIComponent(
			`${partsConfig.forks.materialType} ${partsConfig.forks.colourNumber}`
		);
		const rearForksTop = encodeURIComponent(
			`${partsConfig.rearForksTop.materialType} ${partsConfig.rearForksBottom.colourNumber}`
		);
		const rearForksBottom = encodeURIComponent(
			`${partsConfig.rearForksBottom.materialType} ${partsConfig.rearForksBottom.colourNumber}`
		);
		const rearForksBracket = encodeURIComponent(
			`${partsConfig.rearForksBracket.materialType} ${partsConfig.rearForksBracket.colourNumber}`
		);
		const rearForksArch = encodeURIComponent(
			`${partsConfig.rearForksArch.materialType} ${partsConfig.rearForksArch.colourNumber}`
		);
		const logoKeyLine = partColours.logoKeyline;
		const logo = partColours.logo;
		const frontLogoKeyline = partColours.frontLogoKeyline;
		const frontLogo = partColours.frontLogo;
		const pole = partColours.pole;
		const poleKeyline = partColours.poleKeyline;

		shareUrl = `${page.url.origin}?frame=${frame}&forks=${forks}&logoKeyline=${encodeURIComponent(logoKeyLine)}&logo=${encodeURIComponent(logo)}&frontLogoKeyline=${encodeURIComponent(frontLogoKeyline)}&frontLogo=${encodeURIComponent(frontLogo)}&pole=${encodeURIComponent(pole)}&poleKeyline=${encodeURIComponent(poleKeyline)}&rearForksTop=${rearForksTop}&rearForksBottom=${rearForksBottom}&rearForksBracket=${rearForksBracket}&rearForksArch=${rearForksArch}&pattern=${currentPattern}`;

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
