// tailwind.config.js
import daisyui from 'daisyui';
import daisyuiThemes from 'daisyui/src/colors/themes.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...daisyuiThemes["[data-theme=light]"],
          primary: "#ef4444", // 🔴 red for light mode
        },
      },
      {
        dark: {
          ...daisyuiThemes["[data-theme=dark]"],
          primary: "#22c55e", // 🟢 green for dark mode
        },
      },
    ],
  },
};
