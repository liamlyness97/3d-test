<script lang="ts">
	import { Canvas } from '@threlte/core';
	import type CC from 'camera-controls';
	import type { Mesh } from 'three';
	import TestScene from '$lib/Scenes/TestScene.svelte';
	import { colourMap, partColours, hexToColourName } from '$lib/PartColours.svelte';
	import { fly } from 'svelte/transition';
	import FrameConfig from '$lib/components/config/FrameConfig.svelte';
	import ForksConfig from '$lib/components/config/ForksConfig.svelte';
	import CrankArmsConfig from '$lib/components/config/CrankArmsConfig.svelte';
	import CrankCogConfig from '$lib/components/config/CrankCogConfig.svelte';
	import PedalConfig from '$lib/components/config/PedalConfig.svelte';
	import HubsConfig from '$lib/components/config/HubsConfig.svelte';
	import RimsConfig from '$lib/components/config/RimsConfig.svelte';
	import LugsConfig from '$lib/components/config/LugsConfig.svelte';
	import LogoConfig from '$lib/components/config/LogoConfig.svelte';
	import { page } from '$app/state';
	import PoleConfig from '$lib/components/config/PoleConfig.svelte';

	let controls = $state<CC>();
	let mesh = $state<Mesh>();

	let enabled = $state(true);

	let tab = $state('default');

	let shareUrl = $state('');
	let copied = $state(false);

	let { data } = $props();

	if (data.frameCol && colourMap[data.frameCol]) {
		partColours.frame = colourMap[data.frameCol];
	}
	if (data.forksCol && colourMap[data.forksCol]) {
		partColours.forks = colourMap[data.forksCol];
	}
	if (data.lugsCol && colourMap[data.lugsCol]) {
		partColours.lugs = colourMap[data.lugsCol];
	}
	if (data.logoCol && colourMap[data.logoCol]) {
		partColours.logo = colourMap[data.logoCol];
	}

	function shareSetup() {
		const frame = hexToColourName[partColours.frame];
		const forks = hexToColourName[partColours.forks];
		const lugs = hexToColourName[partColours.lugs];
		const logo = hexToColourName[partColours.logo];

		shareUrl = `${page.url}?frame=${frame}&forks=${forks}&lugs=${lugs}&logo=${logo}`;

		navigator.clipboard.writeText(shareUrl);
		copied = true;

		setTimeout(() => {
			copied = false;
		}, 5000);
	}
</script>

<div class="h-screen w-full">
	<div class="fixed top-10 z-[900] flex w-full justify-between px-20">
		<div class="font-body text-lg">
			<p class="text-[#0E1E3E]"><span class="font-[600]">Pro Lugged 44</span> Core package</p>
			<p class="text-[#0E1E3E]">£4854</p>
		</div>
		<div class="font-title relative flex w-1/2 justify-end text-xl">
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
					class="absolute flex w-full items-center justify-end gap-2 text-[#0E1E3E] duration-200 hover:opacity-75"
				>
					<p class=" mt-1 text-[#0E1E3E]">Share Link Copied</p>
					<iconify-icon icon="teenyicons:clipboard-tick-solid"></iconify-icon>
				</span>
			{/if}
		</div>
	</div>

	<!-- Init Controls -->
	{#if tab == 'default'}
		<!-- <div
			in:fly={{ duration: 300, delay: 200, y: 20 }}
			out:fly={{ duration: 200, y: 20 }}
			class="fixed bottom-24 z-50 flex w-full justify-center gap-4"
		>
			<button
				onclick={() => {
					tab = 'camera';
					controls?.setPosition(0.1, 0.7, 1.5, true);
					controls?.setTarget(0.2, 0.2, -0.9, true);
				}}
				class="xl:flex-r flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-lg duration-300 ease-out hover:-translate-y-1"
				aria-label="Camera"
			>
				<iconify-icon icon="jam:video-camera-f"></iconify-icon>
			</button>
			<button
				class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-lg duration-300 ease-out hover:-translate-y-1"
				aria-label="Config"
				onclick={() => {
					tab = 'config';
					controls?.setPosition(0.1, 0.7, 1.5, true);
					controls?.setTarget(0.2, 0.2, -0.9, true);
				}}
			>
				<iconify-icon icon="hugeicons:configuration-01"></iconify-icon>
			</button>
		</div> -->
	{/if}

	<!-- Camera Controls -->
	{#if tab == 'camera'}
		<!-- <div
			class="fixed bottom-24 z-50 flex w-full justify-center gap-4"
			in:fly={{ duration: 300, delay: 200, y: 20 }}
			out:fly={{ duration: 200, y: 20 }}
		>
			<button
				onclick={() => {
					tab = 'default';
					controls?.setPosition(0, 0.5, 2, true);
					controls?.setTarget(0, 0.5, 0, true);
				}}
				class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1.25rem] font-medium duration-300 ease-out hover:-translate-y-1"
				aria-label="Back"
			>
				<iconify-icon icon="material-symbols-light:arrow-back"></iconify-icon>
			</button>
			<button
				class="flex h-10 -translate-y-0 items-center justify-center rounded-full bg-white px-4 text-[0.6rem] font-medium duration-300 ease-out hover:-translate-y-1"
				aria-label="Camera Control"
				onclick={() => {
					controls?.setPosition(-0.38, 1, -0.25, true);
					controls?.setTarget(1.2, 1, 1, true);
				}}
			>
				Seat
			</button>
			<button
				class="flex h-10 -translate-y-0 items-center justify-center rounded-full bg-white px-4 text-[0.6rem] font-medium duration-300 ease-out hover:-translate-y-1"
				aria-label="Camera Control"
				onclick={() => {
					controls?.setPosition(0.5, 0.75, -0.6, true);
					controls?.setTarget(1, 0, 0.6, true);
				}}
			>
				Front Wheel
			</button>
			<button
				class="flex h-10 -translate-y-0 items-center justify-center rounded-full bg-white px-4 text-[0.6rem] font-medium duration-300 ease-out hover:-translate-y-1"
				aria-label="Camera Control"
				onclick={() => {
					controls?.setPosition(-1, 0.5, 0.85, true);
					controls?.setTarget(0, 0.2, 0.45, true);
				}}
			>
				Back Wheel
			</button>
			<button
				class="flex h-10 -translate-y-0 items-center justify-center rounded-full bg-white px-4 text-[0.6rem] font-medium duration-300 ease-out hover:-translate-y-1"
				aria-label="Camera Control"
				onclick={() => {
					controls?.setPosition(1, 1.1, -0.85, true);
					controls?.setTarget(0, 1, -0.25, true);
				}}
				>Handle Bars
			</button>
			<button
				class="flex h-10 -translate-y-0 items-center justify-center rounded-full bg-white px-4 text-[0.6rem] font-medium duration-300 ease-out hover:-translate-y-1"
				aria-label="Camera Control"
				onclick={() => {
					controls?.setPosition(1, 1.1, 0.85, true);
					controls?.setTarget(0, 0, 0.25, true);
				}}
				>Peddle
			</button>
			<button
				class="flex h-10 -translate-y-0 items-center justify-center rounded-full bg-white px-4 text-[0.6rem] font-medium duration-300 ease-out hover:-translate-y-1"
				aria-label="Camera Control"
				onclick={() => {
					controls?.setPosition(0.5, 0.75, -0.2, true);
					controls?.setTarget(0, 0, 0.25, true);
				}}
				>Crank
			</button>
		</div> -->
	{/if}

	<!-- Bike Config Icons -->
	{#if tab == 'default'}
		<div
			class="font-title fixed bottom-24 z-50 flex h-10 w-full justify-center gap-4 text-[#0E1E3E]"
			in:fly={{ duration: 300, delay: 200, y: 20 }}
			out:fly={{ duration: 200, y: 20 }}
		>
			<!-- <button
				onclick={() => {
					tab = 'default';
					controls?.setPosition(0, 0.5, 2, true);
					controls?.setTarget(0, 0.5, 0, true);
				}}
				class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1.25rem] font-medium duration-300 ease-out hover:-translate-y-1"
				aria-label="Back"
			>
				<iconify-icon icon="material-symbols-light:arrow-back"></iconify-icon>
			</button> -->
			<button
				onclick={() => {
					tab = 'frameConfig';
					controls?.setPosition(0.1, 0.7, 1.5, true);
					controls?.setTarget(0.2, 0.2, -0.9, true);
				}}
				class="border-brandBlue flex -translate-y-0 items-center justify-center rounded-full border bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
				aria-label="Frame"
			>
				Frame
			</button>
			<button
				onclick={() => {
					tab = 'forksConfig';
					controls?.setPosition(0.8, 0.7, 0.8, true);
					controls?.setTarget(0.2, 0.2, -0.2, true);
				}}
				class="border-brandBlue flex -translate-y-0 items-center justify-center rounded-full border bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
				aria-label="Forks"
			>
				Forks
			</button>
			<button
				onclick={() => {
					tab = 'poleConfig';
					controls?.setPosition(0, 0.9, 0.6, true);
					controls?.setTarget(0.2, 0.2, -0.2, true);
				}}
				class="border-brandBlue flex -translate-y-0 items-center justify-center rounded-full border bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
				aria-label="Logo"
			>
				Pole
			</button>
			<button
				onclick={() => {
					tab = 'logoConfig';
					controls?.setPosition(0.4, 0.8, 0.6, true);
					controls?.setTarget(0.2, 0.2, -0.3, true);
				}}
				class="border-brandBlue flex -translate-y-0 items-center justify-center rounded-full border bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
				aria-label="Logo"
			>
				Logo
			</button>
			<!-- <button
				onclick={() => {
					tab = 'lugsConfig';
					controls?.setPosition(-0.2, 0.9, -0.9, true);
					controls?.setTarget(0.2, 0.3, 0.5, true);
				}}
				class="flex -translate-y-0 items-center justify-center rounded-full bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
				aria-label="Lugs"
			>
				Lugs
			</button> -->
			<!-- <button
				onclick={() => {
					tab = 'crankArmConfig';
					controls?.setPosition(0.5, 0.75, -0.2, true);
					controls?.setTarget(0, 0, 0.25, true);
				}}
				class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
				aria-label="Crank Arm"
			>
				<img class="h-4 w-4" src="/icons/crank.svg" alt="Crank Arms Icon" />
			</button> -->
			<!-- <button
				onclick={() => {
					tab = 'crankCogConfig';
					controls?.setPosition(0.5, 0.75, -0.2, true);
					controls?.setTarget(0, 0, 0.25, true);
				}}
				class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
				aria-label="Crank"
			>
				<img class="h-4 w-4" src="/icons/cog.svg" alt="Crank Icon" />
			</button> -->
			<!-- <button
				onclick={() => {
					tab = 'pedalConfig';
					controls?.setPosition(1, 1.1, 0.85, true);
					controls?.setTarget(0, 0, 0.25, true);
				}}
				class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
				aria-label="Pedal"
			>
				<img class="h-4 w-4" src="/icons/pedal.svg" alt="Pedal Icon" />
			</button> -->
			<!-- <button
				onclick={() => {
					tab = 'hubsConfig';
					controls?.setPosition(1, 0.75, -0.75, true);
					controls?.setTarget(0, 0.25, -0.5, true);
				}}
				class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
				aria-label="Hub"
			>
				<img class="h-4 w-4" src="/icons/hub.svg" alt="Hub Icon" />
			</button> -->
			<!-- <button
				onclick={() => {
					tab = 'rimsConfig';
					controls?.setPosition(-1, 0.5, 0.85, true);
					controls?.setTarget(0, 0.2, 0.45, true);
				}}
				class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1rem] font-medium duration-300 ease-out hover:-translate-y-1"
				aria-label="Wheel"
			>
				<img class="h-6 w-6" src="/icons/wheel.svg" alt="Wheel Icon" />
			</button> -->
		</div>
	{/if}

	<!-- Frame Config -->
	{#if tab == 'frameConfig'}
		<FrameConfig bind:tab bind:controls />
	{/if}

	<!-- Forks Config -->
	{#if tab == 'forksConfig'}
		<ForksConfig bind:tab bind:controls />
	{/if}

	<!-- Lugs Config -->
	{#if tab == 'lugsConfig'}
		<LugsConfig bind:tab bind:controls />
	{/if}

	<!-- Crank Arms Config -->
	{#if tab == 'crankArmConfig'}
		<CrankArmsConfig bind:tab bind:controls />
	{/if}

	<!-- Crank Cog Config -->
	{#if tab == 'crankCogConfig'}
		<CrankCogConfig bind:tab bind:controls />
	{/if}

	<!-- Pedal Config -->
	{#if tab == 'pedalConfig'}
		<PedalConfig bind:tab bind:controls />
	{/if}

	<!-- Hubs Config -->
	{#if tab == 'hubsConfig'}
		<HubsConfig bind:tab bind:controls />
	{/if}

	<!-- Rims Config -->
	{#if tab == 'rimsConfig'}
		<RimsConfig bind:tab bind:controls />
	{/if}

	<!-- Logo Config -->
	{#if tab == 'logoConfig'}
		<LogoConfig bind:tab bind:controls />
	{/if}

	<!-- Pole Config -->
	{#if tab == 'poleConfig'}
		<PoleConfig bind:tab bind:controls />
	{/if}

	<Canvas>
		<TestScene bind:controls bind:mesh />
	</Canvas>

	<div
		class="bg-brandOrange fixed bottom-0 left-0 flex w-full items-center justify-between px-20 py-3"
	>
		<div class="flex items-center gap-6 text-white">
			<p class="font-title text-2xl font-normal uppercase tracking-widest">
				Pick your colour & pay deposit
			</p>
			<p class="font-body text-xl">£1,200</p>
		</div>
		<div>
			<button class="font-title border border-white px-6 py-3 font-light uppercase text-white">
				Pay To Secure
			</button>
		</div>
	</div>
</div>
