/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "ospet-primary": "#ff6e6c",
        "ospet-secondary": "#67568c",
      },
    },
  },
  plugins: [],
};
