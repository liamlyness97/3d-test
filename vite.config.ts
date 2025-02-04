import { sveltekit } from '@sveltejs/kit/vite';
import { threlteStudio } from '@threlte/studio/vite'
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [threlteStudio(), sveltekit()],
	ssr: {
		noExternal: ['camera-controls']
	}
});
