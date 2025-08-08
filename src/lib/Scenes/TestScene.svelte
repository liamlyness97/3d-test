<script lang="ts">
	import { T, useLoader, useTask, useThrelte } from '@threlte/core';
	import { Environment, useTexture } from '@threlte/extras';
	import { EquirectangularReflectionMapping, PerspectiveCamera, RepeatWrapping } from 'three';
	import { RGBELoader } from 'three/examples/jsm/Addons.js';
	import type CC from 'camera-controls';
	import type { Mesh } from 'three';
	import CameraControls from '$lib/CameraControls';
	import Bike from '$lib/models/Bike.svelte';
	import { metalness } from 'three/tsl';
	import LuggedFrame from '$lib/models/mercian/LuggedFrame.svelte';
	import FrameWithLogo from '$lib/models/mercian/FrameWithLogo.svelte';
	import LuggedLogoPoll from '$lib/models/mercian/LuggedLogoPoll.svelte';
	import LuglessFrame from '$lib/models/mercian/LuglessFrame.svelte';
	import LuglessLogo from '$lib/models/mercian/LuglessLogo.svelte';

	// Loads in the HDRI
	const { load } = useLoader(RGBELoader);
	const map = load('/lighting.hdr', {
		transform(texture) {
			texture.mapping = EquirectangularReflectionMapping;
			return texture;
		}
	});

	const floor = useTexture(
		{
			map: '/floor/texture.jpg',
			normalMap: '/floor/normal.png',
			metalnessMap: '/floor/metallic.jpg',
			aoMap: '/floor/occlusion.jpg'
		},
		{
			transform: (texture) => {
				texture.wrapS = RepeatWrapping;
				texture.wrapT = RepeatWrapping;
				texture.repeat.set(10, 10);
				return texture;
			}
		}
	);

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
	controls?.setPosition(0.9, 5, 20);
	controls?.zoom(0);
	controls?.setOrbitPoint(0, 0, 0);
	controls?.dolly(-1.7);
	controls?.truck(0.18, -0.4);
	controls.maxPolarAngle = Math.PI / 2;
	controls.maxDistance = 5;
	controls.minDistance = 1;

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

<T.DirectionalLight
	position={[0, 150, 0]}
	intensity={4}
	castShadow
	shadow.mapSize.width={500}
	shadow.mapSize.height={500}
	shadow.radius={5}
	shadow.blurSamples={75}
/>

<T.Group
	oncreate={(ref) => {
		mesh = ref;
	}}
	scale={1}
	position={[0, 0, 0]}
>
	<!-- <LuglessLogo /> -->
	<LuglessLogo />

	{#if $floor}
		<T.Mesh receiveShadow position.y={-0.1}>
			<T.BoxGeometry args={[50, 0.01, 50]} />
			<T.MeshStandardMaterial color={'#ffffff'} roughness={0.2} metalness={1} />
			<T.ShadowMaterial opacity={0.25} roughness={0.2} metalness={0} />
		</T.Mesh>
	{/if}
</T.Group>

{#await map then texture}
	<Environment {texture} />
{/await}
