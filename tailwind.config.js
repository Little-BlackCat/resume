/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: "#2C3333",
        secondary: "#395B64",
        base: "#A5C9CA",
        background: "#E7F6F2",
        danger: "#C70039",
        success: "#1D5D9B",
        warning: "#F4D160",
      },
      backgroundImage: {
        'img': "url('./public/images/bg-image.jpg')"
      }
    },
  },
  plugins: [],
}

