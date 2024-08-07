/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "color-dark-blue": "#06283D",
      "color-dark-blue-2": "#144272",
      "color-light-blue": "#1363DF",
      "color-bg-transparent": "rgba(20, 66, 114, 0.3)",
      "color-border": "#BDBDBD",
      "color-white": "#fff",
      // "text-p-color": "#333333",
      // "color-red": "rgb(220 38 38)",

      // "color-btn": "#2F80ED",
      // "color-black": "#222",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      xlg: { max: "1150px" },
      // => @media (max-width: 1150px) { ... }
      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }
      xmd: { max: "950px" },
      // => @media (max-width: 850px) { ... }
      md: { max: "850px" },
      // => @media (max-width: 850px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        "card-header": "url('../public/assets/blockchainHome.jpeg')",
      },
      gridTemplateColumns: {
        "view-grid": "repeat(auto-fit, minmax(30rem, 1fr))",
      },
    },
  },
  plugins: [],
};
