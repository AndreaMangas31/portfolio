/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oceanBlue: {
          50: "#f0f9ff", // Muy claro
          100: "#e0f2ff",
          200: "#bae6ff",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9", // Principal
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e", // Oscuro
        },
        customRed: {
          50: "#fef2f2", // Muy claro
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444", // Principal
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d", // Oscuro
        },
      },
    },
  },
  plugins: [],
};
