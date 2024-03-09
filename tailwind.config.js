/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'gruv-bg': '#282828',
				'gruv-red': '#cc241d',
				'gruv-green': '#98971a',
				'gruv-yellow': '#d79921',
				'gruv-blue': '#458588',
				'gruv-purple': '#b16286',
				'gruv-aqua': '#689d6a',
				'gruv-gray': '#a89984',
				'gruv-orange': '#d65d0e',
			},
		},
	},
	plugins: [],
};
