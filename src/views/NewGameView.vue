<script setup lang="ts">
import { Game } from '@/classes';
import { RouterLink } from 'vue-router';

function createGame(ev:Event) {
  let form = <HTMLFormElement> ev.target

  if (!form.checkValidity())
    return

  ev.preventDefault()

  let game = new Game(
    form['game_name'].value,
    form['game_version'].value,
    form['game_ext'].value,
    form['game_logo'].value
  )

  /*
  TODO:
  Figure out which database to finally use
  Validate image
  */
}
</script>

<template>
  <main class="absolute block w-full h-full top-0 bg-new-game-background bg-center bg-cover -z-20">
    <div class="block w-96 mt-16 mx-auto bg-zinc-800 bg-opacity-80 rounded-2xl backdrop-blur-sm shadow-black shadow-lg">
      <h1 class="p-2 bg-zinc-700 bg-opacity-80 rounded-2xl font-bold text-center text-xl">Create new game</h1>
      <div class="p-6 text-center">
        <form @submit="createGame">
          <p class="text-left inline-block w-32 h-8 leading-8 mb-4">Name</p>
          <input class="bg-transparent border-slate-50 border-b-2 w-52 h-8 leading-8 mb-4" type="text" name="game_name" required placeholder="Blocky Block">
          <br>
          <p class="text-left inline-block w-32 h-8 leading-8 mb-4">Version</p>
          <input class="bg-transparent border-slate-50 border-b-2 w-52 h-8 leading-8 mb-4" type="text" name="game_version" required placeholder="1.0.0">
          <br>
          <p class="text-left inline-block w-32 h-8 leading-8 mb-4">File extension</p>
          <input class="bg-transparent border-slate-50 border-b-2 w-52 h-8 leading-8 mb-4" type="text" name="game_ext" required placeholder=".bblvl">
          <br>
          <p class="text-left inline-block w-32 h-8 leading-8 mb-4">Logo</p>
          <input class="w-52 h-8 leading-8 mb-4" type="file" accept="image/*" name="game_logo" required>
          <br>
          <RouterLink to="/games">
            <button type="button" class="bg-red-800 bg-opacity-80 hover:bg-red-700 hover:bg-opacity-90 m-4 py-2 px-4 rounded-md shadow-zinc-900 shadow-lg text-lg">Return</button>
          </RouterLink>
          <button type="submit" class="bg-zinc-700 bg-opacity-80 hover:bg-zinc-600 hover:bg-opacity-90 m-4 py-2 px-4 rounded-md shadow-zinc-900 shadow-lg text-lg">Create</button>
        </form>
      </div>
    </div>
  </main>
</template>