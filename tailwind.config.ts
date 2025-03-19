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
			'primary-100': '#BEF8BA',
			'primary-200': '#8CF085',
			'primary-300': '#2CD122',
			'primary-400': '#1DA415',
			'primary-500': '#198114',
			'secondary-100': '#F4F9F8',
			'secondary-200': '#DAEDE7',
			'secondary-300': '#AED8CC',
			'secondary-400': '#87C1B3',
			'secondary-500': '#5EA395',
			'background-100': '#FAFAFA',
			'background-200': '#D0F2E0',
			'dark-background-100': '#001A17',
			'dark-background-200': '#002621',
			'grayscale-100': '#F6F6F6',
			'grayscale-200': '#D1D1D1',
			'grayscale-300': '#888888',
			'grayscale-400': '#5D5D5D',
			'grayscale-500': '#454545',
			'grayscale-600': '#262626',
			'toggle-light': '#0026211A',
			'toggle-dark': '#D0F2E01A',
			
  		},
		  fontFamily: {
			onest: ["Onest", "sans-serif"],
		  },
		  backgroundImage: {
			"custom-gradient": "linear-gradient(to top, #D7F4E5 0%, #80D5B2 100%)",
			"dark-custom-gradient": "linear-gradient(to top, #003D35 0%, #002621 100%)",
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
