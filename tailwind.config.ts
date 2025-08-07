import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				title: ['"OpticianSans"', 'sans-serif'],
				body: ['"gill-sans-nova"', 'sans-serif'],
			},
			colors: {
				brandBlue: 'rgba(14, 30, 62, 1)',
				brandLightBlue: 'rgba(57, 73, 163, 1)',
				brandOffWhite: 'rgba(254, 252, 239, 1)',
				brandOrange: '#FF5100',

			}
		}
	},

	plugins: []
} satisfies Config;
