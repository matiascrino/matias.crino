/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			animation: {
				"bounce-vertical": "bounce-vertical 2s infinite",
			},
			keyframes: {
				"bounce-vertical": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			colors: {
				"background-color": "#f6f6f6",
			},
			fontFamily: {
				acumin: ["acumin-pro", "sans-serif"],
				mono: ["Roboto Mono", "Montserrat"],
				spartan: ["League Spartan"]
			},
		},
	},
	plugins: [],
};

