<script lang="ts">
	import { Canvas } from '@threlte/core';
	import type CC from 'camera-controls';
	import type { Mesh } from 'three';
	import TestScene from '$lib/Scenes/TestScene.svelte';
	import { partColours } from '$lib/PartColours.svelte';
	import { fly } from 'svelte/transition';

	let controls = $state<CC>();
	let mesh = $state<Mesh>();

	let enabled = $state(true);

	let tab = $state('camera');
</script>

<div class="h-screen w-full">
	<div
		class="fixed left-10 top-1/2 z-50 h-[90vh] w-1/4 -translate-y-1/2 rounded-md bg-slate-900 bg-opacity-75 p-10"
	>
		<div class="flex flex-col gap-5">
			<h1 class="text-3xl font-medium text-white">Bike 3D Test</h1>

			<div class="flex gap-5">
				<button
					onclick={() => {
						tab = 'camera';
						controls?.setPosition(1.8, 0.5, 0, true);
						controls?.setTarget(0, 0.5, 0, true);
					}}
					class="w-full self-start rounded bg-white py-1 text-lg text-slate-900 duration-300 hover:bg-blue-600 hover:text-white {tab ==
					'camera'
						? 'bg-blue-600 text-white'
						: 'bg-white text-slate-900'}">Camera Movement</button
				>
				<button
					onclick={() => (tab = 'parts')}
					class="w-full self-start rounded bg-white py-1 text-lg text-slate-900 duration-300 hover:bg-blue-600 hover:text-white {tab ==
					'parts'
						? 'bg-blue-600 text-white'
						: 'bg-white text-slate-900'}">Change Part Colours</button
				>
			</div>
		</div>
		{#if tab === 'camera'}
			<div
				in:fly={{ x: -20, duration: 400, delay: 300 }}
				out:fly={{ x: 20, duration: 100 }}
				class="mt-5 flex flex-col"
			>
				<div
					class="mt-3 flex flex-col gap-4 [&>button]:rounded-sm [&>button]:py-3 [&>button]:font-medium"
				>
					<button
						class="w-full self-start bg-white text-lg text-slate-900 duration-300 hover:bg-blue-600 hover:text-white"
						onclick={() => {
							controls?.setPosition(-0.75, 1, 0, true);
							controls?.setTarget(1.5, 1, 1, true);
						}}>Seat</button
					>
					<button
						class="w-full self-start bg-white text-lg text-slate-900 duration-300 hover:bg-blue-600 hover:text-white"
						onclick={() => {
							controls?.setPosition(1, 0.75, -0.75, true);
							controls?.setTarget(0, 0.25, -0.5, true);
						}}>Front Wheel</button
					>
					<button
						class="w-full self-start bg-white text-lg text-slate-900 duration-300 hover:bg-blue-600 hover:text-white"
						onclick={() => {
							controls?.setPosition(-1, 0.5, 0.85, true);
							controls?.setTarget(0, 0.2, 0.45, true);
						}}>Back Wheel</button
					>
					<button
						class="w-full self-start bg-white text-lg text-slate-900 duration-300 hover:bg-blue-600 hover:text-white"
						onclick={() => {
							controls?.setPosition(1, 1.1, -0.85, true);
							controls?.setTarget(0, 1, -0.25, true);
						}}>Handle Bars</button
					>
					<button
						class="w-full self-start bg-white text-lg text-slate-900 duration-300 hover:bg-blue-600 hover:text-white"
						onclick={() => {
							controls?.setPosition(1, 1.1, 0.85, true);
							controls?.setTarget(0, 0, 0.25, true);
						}}>Peddle</button
					>
					<button
						class="w-full self-start bg-white text-lg text-slate-900 duration-300 hover:bg-blue-600 hover:text-white"
						onclick={() => {
							controls?.setPosition(0.5, 0.75, -0.2, true);
							controls?.setTarget(0, 0, 0.25, true);
						}}>Crank</button
					>
					<button
						class="w-full self-start bg-white text-lg text-slate-900 duration-300 hover:bg-blue-600 hover:text-white"
						onclick={() => {
							controls?.setPosition(1.8, 0.5, 0, true);
							controls?.setTarget(0, 0.5, 0, true);
						}}>Reset Camera</button
					>
				</div>
			</div>
		{/if}
		{#if tab === 'parts'}
			<div
				in:fly={{ x: -20, duration: 400, delay: 300 }}
				out:fly={{ x: 20, duration: 100 }}
				class="mt-5 flex flex-col"
			>
				<div class="flex flex-col gap-3">
					<div class="flex flex-col">
						<p class="text-lg font-medium text-white">Frame</p>
						<div style={`background: ${partColours.frame}`}>
							<select
								name="frame"
								class=" h-full w-full bg-transparent p-2 text-white"
								onclick={() => {
									controls?.setPosition(1.8, 0.5, 0, true);
									controls?.setTarget(0, 0.5, 0, true);
								}}
								onchange={(e) => {
									partColours.frame = e.target.value;
								}}
							>
								<option></option>
								<option class="text-slate-900" value="#025c8d">Blue</option>
								<option class="text-slate-900" value="#560606">Red</option>
								<option class="text-slate-900" value="#033a1d">Green</option>
								<option class="text-slate-900" value="#b2391b">Orange</option>
								<option class="text-slate-900" value="#151619">Black</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col">
						<p class="text-lg font-medium text-white">Forks</p>
						<div style={`background: ${partColours.forks}`}>
							<select
								name="forks"
								class=" h-full w-full bg-transparent p-2 text-white"
								onclick={() => {
									controls?.setPosition(1, 0.75, -0.75, true);
									controls?.setTarget(0, 0.25, -0.5, true);
								}}
								onchange={(e) => {
									partColours.forks = e.target.value;
								}}
							>
								<option></option>
								<option class="text-slate-900" value="#025c8d">Blue</option>
								<option class="text-slate-900" value="#560606">Red</option>
								<option class="text-slate-900" value="#033a1d">Green</option>
								<option class="text-slate-900" value="#b2391b">Orange</option>
								<option class="text-slate-900" value="#151619">Black</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col">
						<p class="text-lg font-medium text-white">Crank Arms</p>
						<div style={`background: ${partColours.crankSet}`}>
							<select
								name="forks"
								class=" h-full w-full bg-transparent p-2 text-white"
								onclick={() => {
									controls?.setPosition(0.5, 0.75, -0.2, true);
									controls?.setTarget(0, 0, 0.25, true);
								}}
								onchange={(e) => {
									partColours.crankSet = e.target.value;
								}}
							>
								<option></option>
								<option class="text-slate-900" value="#025c8d">Blue</option>
								<option class="text-slate-900" value="#560606">Red</option>
								<option class="text-slate-900" value="#033a1d">Green</option>
								<option class="text-slate-900" value="#b2391b">Orange</option>
								<option class="text-slate-900" value="#151619">Black</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col">
						<p class="text-lg font-medium text-white">Inner Crank</p>
						<div style={`background: ${partColours.crankInner}`}>
							<select
								name="forks"
								class=" h-full w-full bg-transparent p-2 text-white"
								onclick={() => {
									controls?.setPosition(0.5, 0.75, -0.2, true);
									controls?.setTarget(0, 0, 0.25, true);
								}}
								onchange={(e) => {
									partColours.crankInner = e.target.value;
								}}
							>
								<option></option>
								<option class="text-slate-900" value="#025c8d">Blue</option>
								<option class="text-slate-900" value="#560606">Red</option>
								<option class="text-slate-900" value="#033a1d">Green</option>
								<option class="text-slate-900" value="#b2391b">Orange</option>
								<option class="text-slate-900" value="#151619">Black</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col">
						<p class="text-lg font-medium text-white">Outer Crank</p>
						<div style={`background: ${partColours.crankOuter}`}>
							<select
								name="forks"
								class=" h-full w-full bg-transparent p-2 text-white"
								onclick={() => {
									controls?.setPosition(0.5, 0.75, -0.2, true);
									controls?.setTarget(0, 0, 0.25, true);
								}}
								onchange={(e) => {
									partColours.crankOuter = e.target.value;
								}}
							>
								<option></option>
								<option class="text-slate-900" value="#025c8d">Blue</option>
								<option class="text-slate-900" value="#560606">Red</option>
								<option class="text-slate-900" value="#033a1d">Green</option>
								<option class="text-slate-900" value="#b2391b">Orange</option>
								<option class="text-slate-900" value="#151619">Black</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col">
						<p class="text-lg font-medium text-white">Pedals</p>
						<div style={`background: ${partColours.pedals}`}>
							<select
								name="forks"
								class=" h-full w-full bg-transparent p-2 text-white"
								onclick={() => {
									controls?.setPosition(0.5, 0.75, -0.2, true);
									controls?.setTarget(0, 0, 0.25, true);
								}}
								onchange={(e) => {
									partColours.pedals = e.target.value;
								}}
							>
								<option></option>
								<option class="text-slate-900" value="#025c8d">Blue</option>
								<option class="text-slate-900" value="#560606">Red</option>
								<option class="text-slate-900" value="#033a1d">Green</option>
								<option class="text-slate-900" value="#b2391b">Orange</option>
								<option class="text-slate-900" value="#151619">Black</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col">
						<p class="text-lg font-medium text-white">Wheel Hubs</p>
						<div style={`background: ${partColours.frontHub}`}>
							<select
								name="forks"
								class=" h-full w-full bg-transparent p-2 text-white"
								onclick={() => {
									controls?.setPosition(1, 0.75, -0.75, true);
									controls?.setTarget(0, 0.25, -0.5, true);
								}}
								onchange={(e) => {
									partColours.frontHub = e.target.value;
									partColours.backHub = e.target.value;
								}}
							>
								<option></option>
								<option class="text-slate-900" value="#025c8d">Blue</option>
								<option class="text-slate-900" value="#560606">Red</option>
								<option class="text-slate-900" value="#033a1d">Green</option>
								<option class="text-slate-900" value="#b2391b">Orange</option>
								<option class="text-slate-900" value="#151619">Black</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col">
						<p class="text-lg font-medium text-white">Wheel Rims</p>
						<div style={`background: ${partColours.frontRim}`}>
							<select
								name="forks"
								class=" h-full w-full bg-transparent p-2 text-white"
								onclick={() => {
									controls?.setPosition(1, 0.75, -0.75, true);
									controls?.setTarget(0, 0.25, -0.5, true);
								}}
								onchange={(e) => {
									partColours.frontRim = e.target.value;
								}}
							>
								<option></option>
								<option class="text-slate-900" value="#025c8d">Blue</option>
								<option class="text-slate-900" value="#560606">Red</option>
								<option class="text-slate-900" value="#033a1d">Green</option>
								<option class="text-slate-900" value="#b2391b">Orange</option>
								<option class="text-slate-900" value="#151619">Black</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
	<Canvas>
		<TestScene bind:controls bind:mesh />
	</Canvas>
</div>
