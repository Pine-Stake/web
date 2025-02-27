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

  		},
		  fontFamily: {
			onest: ["Onest", "sans-serif"],
		  },
		  backgroundImage: {
			"custom-gradient": "linear-gradient(to bottom, #003D35 0%, #002621 100%)",
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
