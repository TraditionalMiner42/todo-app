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
			header: ["36px"],
			taskList: ["18px"],
			button: ["20px"],
		},
		extend: {},
	},
	plugins: [],
};
