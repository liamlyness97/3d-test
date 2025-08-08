<script lang="ts">
	import { onDestroy } from 'svelte';
	import { T } from '@threlte/core';
	import { MeshPhysicalMaterial } from 'three';
	import { CarPaintMaterial as CarPaintMaterialImpl } from './CarPaintMaterial';

	interface Props {
		baseMaterial?: MeshPhysicalMaterial;
		color?: string;
		colorFlakes?: string;
		colorPerl?: string;
	}

	let {
		baseMaterial,
		color = '#ff61bd',
		colorFlakes = '#ffbde3',
		colorPerl = '#ffbde3'
	}: Props = $props();

	let material = $state<CarPaintMaterialImpl | undefined>();

	$effect(() => {
		// Create new material when baseMaterial changes
		if (baseMaterial) {
			material?.dispose();
			material = new CarPaintMaterialImpl(baseMaterial);
		}
	});

	// Update colors when they change
	$effect(() => {
		if (material && color && colorPerl && colorFlakes) {
			material.setColors(color, colorPerl, colorFlakes);
		}
	});

	// Cleanup on component destroy
	onDestroy(() => {
		material?.dispose();
	});
</script>

{#if material}
	<T.Primitive object={material} attach="material" dispose={false} />
{/if}
