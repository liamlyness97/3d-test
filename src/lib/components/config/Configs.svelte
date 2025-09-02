<script lang="ts">
	import { fly } from 'svelte/transition';
	import ForksConfig from './ForksConfig.svelte';
	import FrameConfig from './FrameConfig.svelte';
	import FrontLogoConfig from './FrontLogoConfig.svelte';
	import LogoConfig from './LogoConfig.svelte';
	import LugsConfig from './LugsConfig.svelte';
	import PoleConfig from './PoleConfig.svelte';
	import RearForksConfig from './RearForksConfig.svelte';

	let { tab = $bindable(), controls = $bindable() } = $props();
</script>

<!-- Bike Config Icons -->
{#if tab == 'default'}
	<div
		class="fixed bottom-24 z-50 flex h-10 w-full justify-center gap-4 font-title text-[#0E1E3E]"
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
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
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
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Forks"
		>
			Front Forks
		</button>
		<button
			onclick={() => {
				tab = 'rearForksConfig';
				controls?.setPosition(-0.7, 0.7, 0.8, true);
				controls?.setTarget(0, 0.3, -0.2, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Rear Forks"
		>
			Rear Forks
		</button>
		<button
			onclick={() => {
				tab = 'poleConfig';
				controls?.setPosition(0, 0.9, 0.6, true);
				controls?.setTarget(0.2, 0.2, -0.2, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
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
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Logo"
		>
			Logo
		</button>
		<button
			onclick={() => {
				tab = 'frontLogoConfig';
				controls?.setPosition(0.9, 0.8, 0.2, true);
				controls?.setTarget(0, 0.5, -0.3, true);
			}}
			class="flex -translate-y-0 items-center justify-center rounded-full border border-brandBlue bg-white px-8 text-[1rem] text-sm font-light duration-300 ease-out hover:-translate-y-1"
			aria-label="Front Logo"
		>
			Front Logo
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

<!-- Forks Config -->
{#if tab == 'rearForksConfig'}
	<RearForksConfig bind:tab bind:controls />
{/if}

<!-- Lugs Config -->
{#if tab == 'lugsConfig'}
	<LugsConfig bind:tab bind:controls />
{/if}

<!-- Logo Config -->
{#if tab == 'logoConfig'}
	<LogoConfig bind:tab bind:controls />
{/if}

<!-- Front Logo Config -->
{#if tab == 'frontLogoConfig'}
	<FrontLogoConfig bind:tab bind:controls />
{/if}

<!-- Pole Config -->
{#if tab == 'poleConfig'}
	<PoleConfig bind:tab bind:controls />
{/if}
