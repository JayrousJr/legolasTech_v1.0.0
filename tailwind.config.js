/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
		extend: {
			animation: {
				"infinite-scroll": "infinite-scroll 25s linear infinite",
			},
			colors: {
				primary: "#00040f",
				secondary: "#00ff90",
				tertiary: "#151030",
				"black-100": "#100d25",
				dimWhite: "rgba(255, 255, 255, 0.7)",
				dimBlue: "rgba(9, 151, 124, 0.1)",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},

			keyframes: {
				"border-fade": {
					"0%": { "border-color": "transparent" },
					"25%": { "border-color": "rgba(52, 152, 219, 0.5)" },
					"50%": { "border-color": "rgba(52, 152, 219, 0.75)" },
					"75%": { "border-color": "rgba(52, 152, 219, 1)" },
					"100%": { "border-color": "transparent" },
				},
				"infinite-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
			},
		},
		animation: {
			"border-fade": "border-fade 2s linear forwards",
		},
		screens: {
			xs: "480px",
			ss: "620px",
			sm: "768px",
			md: "1060px",
			lg: "1200px",
			xl: "1700px",
		},
	},
	plugins: [],
};
