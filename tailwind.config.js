/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('/img/home_background.png')",
        'games-background': "url('/img/games_background.png')",
        'about-background': "url('/img/about_background.png')"
      },
      fontFamily: {
        'kanit': ['Kanit']
      }
    },
  },
  plugins: [],
}

