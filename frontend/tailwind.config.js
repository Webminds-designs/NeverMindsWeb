/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Parkinsans: ["Parkinsans", "sans-serif"], // Add your custom font here
        sinhala: ['Noto Sans Sinhala', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
