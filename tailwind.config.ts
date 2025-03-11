import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'dark-green': '#001A17',
			'lime-green': '#2CD122',
			'light-green': '#AED8CC',
			'grayscale-100': '#F6F6F6',
			'grayscale-200': '#D1D1D1',
			'grayscale-300': '#888888',
			'grayscale-600': '#262626',
			'dark-200':'#002621',
			'secondary-300': '#AED8CC',
			'secondary-500': '#5EA395',
			'primary-200': '#8CF085',

  		},
		  fontFamily: {
			onest: ["Onest", "sans-serif"],
		  },
		  backgroundImage: {
			"custom-gradient": "linear-gradient(to top, #003D35 0%, #002621 100%)",
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
