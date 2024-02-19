/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('/img/bg/home.png')",
        'games-background': "url('/img/bg/games.png')",
        'about-background': "url('/img/bg/about.png')",
        'new-game-background': "url('/img/bg/new_game.png')"
      },
      fontFamily: {
        'kanit': ['Kanit']
      }
    },
  },
  plugins: [],
}

