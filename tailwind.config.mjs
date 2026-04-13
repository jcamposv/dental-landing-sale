/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563EB",
          dark: "#1E40AF",
          light: "#3B82F6",
        },
        accent: {
          DEFAULT: "#10B981",
          dark: "#059669",
          light: "#34D399",
        },
        surface: {
          DEFAULT: "#F8FAFC",
          dark: "#0F172A",
          muted: "#F1F5F9",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
