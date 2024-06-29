import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dviolet': '#B388EB',
        'dblue': '#8093F1',
        'rose': '#F7AEF8',
        'lblue': '#72DDF7',
        'siren': '#697FEE',
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
