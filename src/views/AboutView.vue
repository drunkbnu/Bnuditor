<script setup lang="ts">
import { version } from '../../package.json'
</script>

<template>
  <main class="absolute block w-full h-full top-0 bg-about-background bg-center bg-cover -z-20">
    <div class="block w-2/3 mt-16 mx-auto bg-zinc-800 bg-opacity-80 rounded-2xl text-center backdrop-blur-sm shadow-black shadow-lg">
      <h1 class="p-2 bg-zinc-700 bg-opacity-80 rounded-2xl font-bold text-xl">About</h1>
      <div class="p-6">
        <p><b>Bnuditor</b> ver. {{ version }}</p>
        <br>
        <p><i>A web tool to create, edit and save levels for Everybody Edits Offline and community mods</i></p>
      </div>
    </div>
  </main>
</template>