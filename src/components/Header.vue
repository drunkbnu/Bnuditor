<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { HomeIcon, PaintBrushIcon, PuzzlePieceIcon, InformationCircleIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <header class="bg-zinc-800 w-full h-10 leading-10 z-20 rounded-xl">
    <nav>
      <RouterLink class="inline-block px-4 w-48 h-10 border-b-2 border-zinc-500 rounded-xl hover:bg-zinc-600" to="/">
        <HomeIcon class="inline w-6 h-6 -mt-1 mr-2" />Home
      </RouterLink>
      <RouterLink class="inline-block px-4 w-48 h-10 border-b-2 border-zinc-500 rounded-xl hover:bg-zinc-600" to="/canvas">
        <PaintBrushIcon class="inline w-6 h-6 -mt-1 mr-2" />Canvas
      </RouterLink>
      <RouterLink class="inline-block px-4 w-48 h-10 border-b-2 border-zinc-500 rounded-xl hover:bg-zinc-600" to="/games">
        <PuzzlePieceIcon class="inline w-6 h-6 -mt-1 mr-2" />Games
      </RouterLink>
      <RouterLink class="inline-block px-4 w-48 h-10 border-b-2 border-zinc-500 rounded-xl hover:bg-zinc-600" to="/about">
        <InformationCircleIcon class="inline w-6 h-6 -mt-1 mr-2" />About
      </RouterLink>
    </nav>
  </header></template>