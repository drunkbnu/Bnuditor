<script setup lang="ts">
import { ref } from 'vue';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import { PlusIcon, ArrowDownTrayIcon, PencilIcon, MinusIcon, ArrowUpTrayIcon } from '@heroicons/vue/24/outline';
import { Game } from '../classes'

// Placeholder games, they must be loaded from db
const games = [
  new Game("Everybody Edits Offline", "1.0.0", "ee"),
  new Game("Project M", "1.1.1", "pm"),
  new Game("Operation K8", "2.0.0-3", "k8"),
], game = ref(0)
</script>

<template>
  <main class="absolute block w-full h-full top-0 bg-games-background bg-center bg-cover -z-20">
    <div class="block w-2/3 mt-16 mx-auto bg-zinc-800 bg-opacity-80 rounded-2xl backdrop-blur-sm shadow-black shadow-lg">
      <h1 class="p-2 bg-zinc-700 bg-opacity-80 rounded-2xl font-bold text-center text-xl">Games</h1>
      <div class="p-6">
        <div class="flex">
          <div class="h-96 w-1/2 inline-flex p-6 bg-zinc-700 bg-opacity-50 rounded-lg">
            <RadioGroup class="w-full" v-model="game">
              <RadioGroupOption v-slot="{ checked }" v-for="game, index in games" :value="index">
                <a :class="'block w-full px-4 h-8 leading-8 rounded-lg cursor-pointer' + (checked ? ' bg-zinc-600 bg-opacity-80' : '')">
                  {{ game.name }}
                  <i class="ml-2 font-extralight">v{{ game.version }}</i>
                </a>
              </RadioGroupOption>
            </RadioGroup>
            <!--<a class="block w-full hover:bg-zinc-600 hover:bg-opacity-90 rounded-lg" v-for="game in games">{{ game }}</a>-->
          </div>
          <div class="h-96 w-1/2 inline-flex p-6 items-center">
            <img :src="'/img/games/' + games[game].short + '.png'" class="block h-2/3 mx-auto">
          </div>
        </div>
        <br>
        <button class="bg-zinc-700 bg-opacity-80 hover:bg-zinc-600 hover:bg-opacity-90 mr-4 py-2 px-4 rounded-md shadow-lg text-lg">
          <PlusIcon class="w-full h-8"/>
          Create
        </button>
        <button class="bg-zinc-700 bg-opacity-80 hover:bg-zinc-600 hover:bg-opacity-90 mr-4 py-2 px-4 rounded-md shadow-lg text-lg">
          <ArrowDownTrayIcon class="w-full h-8"/>
          Import
        </button>
        <button class="bg-zinc-700 bg-opacity-80 hover:bg-zinc-600 hover:bg-opacity-90 mr-4 py-2 px-4 rounded-md shadow-lg text-lg" v-if="game > 0">
          <PencilIcon class="w-full h-8"/>
          Modify
        </button>
        <button class="bg-zinc-700 bg-opacity-80 hover:bg-zinc-600 hover:bg-opacity-90 mr-4 py-2 px-4 rounded-md shadow-lg text-lg" v-if="game > 0">
          <MinusIcon class="w-full h-8"/>
          Delete
        </button>
        <button class="bg-zinc-700 bg-opacity-80 hover:bg-zinc-600 hover:bg-opacity-90 mr-4 py-2 px-4 rounded-md shadow-lg text-lg" v-if="game > 0">
          <ArrowUpTrayIcon class="w-full h-8"/>
          Export
        </button>
      </div>
    </div>
  </main>
</template>