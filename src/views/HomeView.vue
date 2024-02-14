<template>
  <main class="absolute block w-full h-full top-0 bg-home-background bg-center bg-cover -z-20">
    <div class="absolute block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow">
      <img class="h-16" src="/img/logo.svg">
      <br>
      <h2 class="text-2xl">The new level editor for Everybody Edits Offline and community mods</h2>
      <br>
      <div class="block w-full h-64 bg-zinc-800 bg-opacity-80 rounded-2xl shadow-black shadow-lg">
        <h1 class="p-2 bg-zinc-700 bg-opacity-80 rounded-2xl font-bold text-xl text-center">Recently opened worlds</h1>
        <div class="p-6">
          <p><i>No worlds loaded yet...</i></p>
        </div>
      </div>
      <div class="text-center">
        <button class="bg-zinc-700 bg-opacity-80 hover:bg-zinc-600 hover:bg-opacity-90 m-4 py-2 px-4 rounded-md shadow-black shadow-lg text-lg">Load world from file</button>
        <button class="bg-zinc-700 bg-opacity-80 hover:bg-zinc-600 hover:bg-opacity-90 m-4 py-2 px-4 rounded-md shadow-black shadow-lg text-lg">Create new world</button>
      </div>
    </div>
  </main>
</template>
