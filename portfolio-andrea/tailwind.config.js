/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-background": "#18171c",
      },
      maxWidth: {
        "8xl": "96rem",
        "9xl": "112rem",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
        grow: "grow 0.5s ease-in-out forwards",
        typing: "typing 3s steps(20, end) forwards", // Add forwards to ensure it stays visible after animation
        blink: "0.5s step-end infinite",
        bounce: "bounce 1s ease-out",
        bounceOnce: "bounceOnce 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, visibility: "hidden" },
          "100%": { opacity: 1, visibility: "visible" },
        },
        grow: {
          "0%": { transform: "scale(0.8)", opacity: 0, visibility: "hidden" },
          "100%": {
            transform: "scale(1)",
            opacity: 1,
            visibility: "visible",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            opacity: 1,
            visibility: "hidden",
          }, // Start completely hidden
          "100%": {
            width: "100%",
            opacity: 1,
            visibility: "visible",
          }, // End fully visible
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        bounce: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-15px)", // Move up by 15px
          },
          "100%": {
            transform: "translateY(0)", // Return to the original position
          },
          bounceOnce: {
            "0%": {
              transform: "translateY(0)", // Initial position
            },
            "50%": {
              transform: "translateY(-15px)", // Move up by 15px
            },
            "100%": {
              transform: "translateY(0)", // Return to the original position
            },
          },
        },
      },
    },
  },
  plugins: [],
};
