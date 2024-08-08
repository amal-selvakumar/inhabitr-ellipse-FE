import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customGray: '#797979',
        customYellow:'#FFD203'
      },
       amber: {
          300: '#FFD203', // Adding custom color
        },
    },
    fontFamily: {
      libre: ['"Libre Franklin"', 'sans-serif']
    },
  },
  plugins: [],
};
export default config;
