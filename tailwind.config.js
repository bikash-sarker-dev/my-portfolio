/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "p-text": "#060e0c",
      "p-background": "#f1fbf8",
      "p-primary": "#2fd5ae",
      "p-secondary": "#88f2d9",
      "p-accent": "#3bfacd",
      "p-info": "#D1F8EE",
      "p-default": "#E5EFEC",
      "P-cardColor": "#E7F9F4",
      "p-body-bg": "#F1FBF8",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
