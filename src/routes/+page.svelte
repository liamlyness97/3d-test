<script lang="ts">
	import { Canvas } from '@threlte/core';
	import type CC from 'camera-controls';
	import type { Mesh } from 'three';
	import TestScene from '$lib/Scenes/TestScene.svelte';
	import { partColours } from '$lib/PartColours.svelte';
	import { fly } from 'svelte/transition';
	import FrameConfig from '$lib/components/config/FrameConfig.svelte';
	import ForksConfig from '$lib/components/config/ForksConfig.svelte';
	import CrankArmsConfig from '$lib/components/config/CrankArmsConfig.svelte';
	import CrankCogConfig from '$lib/components/config/CrankCogConfig.svelte';
	import PedalConfig from '$lib/components/config/PedalConfig.svelte';
	import HubsConfig from '$lib/components/config/HubsConfig.svelte';
	import RimsConfig from '$lib/components/config/RimsConfig.svelte';
	import LugsConfig from '$lib/components/config/LugsConfig.svelte';

	let controls = $state<CC>();
	let mesh = $state<Mesh>();

	let enabled = $state(true);

	let tab = $state('default');

	let { data } = $props();

	if (data.frameCol) {
		if (data.frameCol == 'blue') {
			partColours.frame = '#025c8d';
		} else if (data.frameCol === 'green') {
			partColours.frame = '#033a1d';
		} else if (data.frameCol === 'red') {
			partColours.frame = '#560606';
		} else if (data.frameCol === 'orange') {
			partColours.frame = '#b2391b';
		} else if (data.frameCol === 'pink') {
			partColours.frame = '#d56c7a';
		} else if (data.frameCol === 'black') {
			partColours.frame = '#151619';
		}
	}
</script>

<div class="h-screen w-full">
	<!-- Init Controls -->
	{#if tab == 'default'}
		<div
			in:fly={{ duration: 300, delay: 200, y: 20 }}
			out:fly={{ duration: 200, y: 20 }}
			class="fixed bottom-10 z-50 flex w-full justify-center gap-4"
		>
			<button
				onclick={() => {
					tab = 'camera';
					controls?.setPosition(1.8, 0.5, 0, true);
					controls?.setTarget(0, 0.5, 0, true);
				}}
				class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-lg duration-300 ease-out hover:-translate-y-1"
				aria-label="Camera"
			>
				<iconify-icon icon="jam:video-camera-f"></iconify-icon>
			</button>
			<button
				class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-lg duration-300 ease-out hover:-translate-y-1"
				aria-label="Config"
				onclick={() => {
					tab = 'config';
					controls?.setPosition(1.8, 0.5, 0, true);
					controls?.setTarget(0, 0.5, 0, true);
				}}
			>
				<iconify-icon icon="hugeicons:configuration-01"></iconify-icon>
			</button>
		</div>
	{/if}

	<!-- Camera Controls -->
	{#if tab == 'camera'}
		<div
			class="fixed bottom-10 z-50 flex w-full justify-center gap-4"
			in:fly={{ duration: 300, delay: 200, y: 20 }}
			out:fly={{ duration: 200, y: 20 }}
		>
			<button
				onclick={() => {
					tab = 'default';
					controls?.setPosition(1.8, 0.5, 0, true);
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
					controls?.setPosition(-0.75, 1, 0, true);
					controls?.setTarget(1.5, 1, 1, true);
				}}
			>
				Seat
			</button>
			<button
				class="flex h-10 -translate-y-0 items-center justify-center rounded-full bg-white px-4 text-[0.6rem] font-medium duration-300 ease-out hover:-translate-y-1"
				aria-label="Camera Control"
				onclick={() => {
					controls?.setPosition(1, 0.75, -0.75, true);
					controls?.setTarget(0, 0.25, -0.5, true);
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
		</div>
	{/if}

	<!-- Bike Config Icons -->
	{#if tab == 'config'}
		<div
			class="fixed bottom-10 z-50 flex w-full justify-center gap-4"
			in:fly={{ duration: 300, delay: 200, y: 20 }}
			out:fly={{ duration: 200, y: 20 }}
		>
			<button
				onclick={() => {
					tab = 'default';
					controls?.setPosition(1.8, 0.5, 0, true);
					controls?.setTarget(0, 0.5, 0, true);
				}}
				class="flex h-10 w-10 -translate-y-0 items-center justify-center rounded-full bg-white text-[1.25rem] font-medium duration-300 ease-out hover:-translate-y-1"
				aria-label="Back"
			>
				<iconify-icon icon="material-symbols-light:arrow-back"></iconify-icon>
			</button>
			<button
				onclick={() => {
					tab = 'frameConfig';
					controls?.setPosition(1.8, 0.5, 0, true);
					controls?.setTarget(0, 0.5, 0, true);
				}}
				class="flex -translate-y-0 items-center justify-center rounded-full bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
				aria-label="Frame"
			>
				Frame
			</button>
			<button
				onclick={() => {
					tab = 'forksConfig';
					controls?.setPosition(1, 0.75, -0.75, true);
					controls?.setTarget(0, 0.25, -0.5, true);
				}}
				class="flex -translate-y-0 items-center justify-center rounded-full bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
				aria-label="Forks"
			>
				Forks
			</button>
			<button
				onclick={() => {
					tab = 'lugsConfig';
					controls?.setPosition(-0.2, 0.9, -0.9, true);
					controls?.setTarget(0.2, 0.3, 0.5, true);
				}}
				class="flex -translate-y-0 items-center justify-center rounded-full bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
				aria-label="Lugs"
			>
				Lugs
			</button>
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

	<Canvas>
		<TestScene bind:controls bind:mesh />
	</Canvas>
</div>
