<template>
  <main class="bg-gray-300 flex flex-grow flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center mb-4">
      <span class="text-3xl font-bold mb-2">Mes projets</span>
      <span class="text-xs">
        Ci-dessous, quelques exemples de réalisations effectuées durant ma vie de developpeur
      </span>
    </div>
    <div class="grid grid-cols-4 bg p-2">
      <div v-for="project in projects" :key="project" class="flex flex-col items-center p-4">
        <span class="font-bold"> {{ project.title }}</span>
        <span class="mb-4"> {{ project.technologie }}</span>
        <img :src="project.image" :alt="project.title" class="h-49" />
      </div>
    </div>
    <!-- Les Cards Projects-->
    <div class="grid grid-cols-4 bg p-2">
      <div class="flex flex-col items-center p-4">
        <span class="font-bold">Jeu Pokémon</span>
        <span class="mb-4">Vue.js | JS | Tyradex API | tailwindcss</span>
        <img src="@/assets/poke.png" class="h-49" alt="" />
      </div>
      <!-- 2ème projet-->
      <div class="flex flex-col items-center p-4">
        <span class="font-bold">Titre</span>
        <span class="mb-4">Technologie utilisé</span>
        <img src="@/assets/novakit.png" class="h-49" alt="" />
      </div>
      <!--3ème projet-->
      <div class="flex flex-col items-center p-4">
        <span class="font-bold">Titre</span>
        <span class="mb-4">Technologie utilisé</span>
        <img src="@/assets/poke.png" class="h-49" alt="" />
      </div>
      <!--4 ème projet-->
      <div class="flex flex-col items-center p-4">
        <span class="font-bold">Titre</span>
        <span class="mb-4">Technologie utilisé</span>
        <img src="@/assets/portfolio.png" class="h-49" alt="" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { projects } from '@/services/MyProjects'
</script>

<style>
.bg {
  background-color: rgba(0, 0, 255, 0.393);
}
</style>
