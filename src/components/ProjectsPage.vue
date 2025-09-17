<template>
  <main class="flex flex-grow flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center mb-4">
      <span class="text-3xl font-bold mb-2 mt-2">Mes projets</span>
      <span class="text-sm text-center">
        Ci-dessous, quelques exemples de réalisations effectuées durant ma vie de developpeur
      </span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 bg p-2 mb-10 shadow-2xl">
      <div v-for="project in projects" :key="project" class="flex flex-col items-center p-4">
        <span class="mb-4 font-bold"> {{ project.title }}</span>

        <span class="mb-4"> {{ project.technologie }}</span>
        <img :src="project.image" :alt="project.title" class="h-full w-118 rounded" />
      </div>
    </div>
    <!-- Les différents projet en itération 
    <div class="grid grid-cols-4 bg p-2">
      <div class="flex flex-col items-center p-4">
        <span class="font-bold">Jeu Pokémon</span>
        <span class="mb-4">Vue.js | JS | Tyradex API | tailwindcss</span>
        <img src="@/assets/poke.png" class="h-49" alt="" />
      </div>
      
      <div class="flex flex-col items-center p-4">
        <span class="font-bold">Titre</span>
        <span class="mb-4">Technologie utilisé</span>
        <img src="@/assets/novakit.png" class="h-49" alt="" />
      </div>
     
      <div class="flex flex-col items-center p-4">
        <span class="font-bold">Titre</span>
        <span class="mb-4">Technologie utilisé</span>
        <img src="@/assets/poke.png" class="h-49" alt="" />
      </div>
      
      <div class="flex flex-col items-center p-4">
        <span class="font-bold">Titre</span>
        <span class="mb-4">Technologie utilisé</span>
        <img src="@/assets/portfolio.png" class="h-49" alt="" />
      </div>
    </div>
    -->
  </main>
</template>

<script setup>
import { projects } from '@/services/MyProjects'
</script>

<style scoped>
main {
  background: linear-gradient(135deg, #2b338b 0%, #b873ba 100%);
}
span {
  color: white;
}
</style>
