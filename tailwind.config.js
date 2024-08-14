/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#54be73",
        accent: "#f1f1f1",
        muted: "#6c757d",
      }
    },
  },
};
