<script lang="ts">
	import { Canvas } from '@threlte/core';
	import type CC from 'camera-controls';
	import type { Mesh } from 'three';
	import { DEG2RAD } from 'three/src/math/MathUtils.js';
	import TestScene from '$lib/Scenes/TestScene.svelte';
	import { Studio } from '@threlte/studio';

	let controls = $state<CC>();
	let mesh = $state<Mesh>();

	let enabled = $state(true);

	$effect(() => {
		if (controls !== undefined) {
			controls.enabled = enabled;
		}
	});
</script>

<div class="h-screen w-full">
	<div
		class="fixed left-10 top-1/2 z-50 h-[90vh] w-1/4 -translate-y-1/2 rounded-md bg-slate-900 bg-opacity-75 p-10"
	>
		<div class="flex flex-col gap-3">
			<h1 class="text-4xl font-medium text-white">Bike 3D Test</h1>
			<p class="text-white">
				An environment to test different possible features to be used within a 3D application
			</p>
		</div>
		<div class="mt-10 flex flex-col">
			<p class="text-2xl font-medium text-white">Camera Movements</p>
			<div
				class="mt-3 flex flex-col gap-2 [&>button]:rounded-sm [&>button]:py-1.5 [&>button]:font-medium"
			>
				<button
					class="w-full self-start bg-white text-lg text-slate-900"
					onclick={() => {
						controls?.setPosition(-0.75, 1, 0, true);
						controls?.setTarget(1.5, 1, 1, true);
					}}>Seat</button
				>
				<button
					class="w-full self-start bg-white text-lg text-slate-900"
					onclick={() => {
						controls?.setPosition(1, 0.75, -0.75, true);
						controls?.setTarget(0, 0.25, -0.5, true);
					}}>Front Wheel</button
				>
				<button
					class="w-full self-start bg-white text-lg text-slate-900"
					onclick={() => {
						controls?.setPosition(-1, 0.5, 0.85, true);
						controls?.setTarget(0, 0.2, 0.45, true);
					}}>Back Wheel</button
				>
				<button
					class="w-full self-start bg-white text-lg text-slate-900"
					onclick={() => {
						controls?.setPosition(1, 1.1, -0.85, true);
						controls?.setTarget(0, 1, -0.25, true);
					}}>Handle Bars</button
				>
				<button
					class="w-full self-start bg-white text-lg text-slate-900"
					onclick={() => {
						controls?.setPosition(1, 1.1, 0.85, true);
						controls?.setTarget(0, 0, 0.25, true);
					}}>Peddle</button
				>
				<button
					class="w-full self-start bg-white text-lg text-slate-900"
					onclick={() => {
						controls?.setPosition(0.5, 0.75, -0.2, true);
						controls?.setTarget(0, 0, 0.25, true);
					}}>Crank</button
				>
				<button
					class="w-full self-start bg-white text-lg text-slate-900"
					onclick={() => {
						controls?.setPosition(1.8, 0.5, 0, true);
						controls?.setTarget(0, 0.5, 0, true);
					}}>Reset Camera</button
				>
			</div>
		</div>
	</div>
	<Canvas>
		<TestScene bind:controls bind:mesh />
	</Canvas>
</div>
