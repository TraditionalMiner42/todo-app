/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		colors: {
			darkBlue: "#008DDA",
			cyan: "#41C9E2",
			lightCyan: "#ACE2E1",
			lightBiege: "#F7EEDD",
			white: "#FFFFFF",
		},
		fontSize: {
			header: ["48px"],
			taskList: ["24px"],
			button: ["28px"],
		},
		extend: {},
	},
	plugins: [],
};
