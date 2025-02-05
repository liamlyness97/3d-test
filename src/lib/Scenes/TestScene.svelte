<script lang="ts">
	import { T, useLoader, useTask, useThrelte } from '@threlte/core';
	import { Environment } from '@threlte/extras';
	import { EquirectangularReflectionMapping, PerspectiveCamera } from 'three';
	import { RGBELoader } from 'three/examples/jsm/Addons.js';
	import type CC from 'camera-controls';
	import type { Mesh } from 'three';
	import CameraControls from '$lib/CameraControls';
	import Bike from '$lib/models/Bike.svelte';

	// Loads in the HDRI
	const { load } = useLoader(RGBELoader);
	const map = load('/lighting.hdr', {
		transform(texture) {
			texture.mapping = EquirectangularReflectionMapping;
			return texture;
		}
	});

	let {
		controls = $bindable(),
		mesh = $bindable()
	}: {
		controls: CC | undefined;
		mesh?: Mesh;
	} = $props();

	const { dom, invalidate } = useThrelte();

	// Sets up the camera
	const camera = new PerspectiveCamera();
	controls = new CameraControls(dom, camera);

	$effect(() => {
		return () => {
			controls?.dispose();
		};
	});

	// Init Camera settings
	controls?.setPosition(11, 5, 0);
	controls?.zoom(0);
	controls?.setOrbitPoint(0, 0, 0);
	controls?.dolly(-2.5);
	controls?.truck(-0.3, -0.15);

	useTask(
		(delta) => {
			if (controls?.update(delta)) {
				invalidate();
			}
		},
		{ autoInvalidate: false }
	);
</script>

<T is={camera} makeDefault />

<T.DirectionalLight position={[15, 10, 10]} castShadow />

<T.Group
	oncreate={(ref) => {
		mesh = ref;
	}}
	scale={1}
	position={[0, 0, 0]}
>
	<Bike />
	<T.Mesh receiveShadow position.y={-0.007}>
		<T.BoxGeometry args={[50, 0.01, 50]} />
		<T.MeshStandardMaterial color="#ff6d00" />
	</T.Mesh>
</T.Group>

{#await map then texture}
	<Environment isBackground {texture} />
{/await}
