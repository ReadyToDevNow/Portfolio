<template>
  <main class="bg-gray-300 flex flex-grow flex-col items-center justify-center">
    <div class="flex flex-col mb-4 items-center">
      <span class="text-4xl p-4">Mes skills </span>
      <input placeholder="Rechercher..." />
      <div class="shadow-xl rounded grid grid-cols-4 gap-6 p-4">
        <div v-for="skill in skills" :key="skill">
          <button>{{ skill.technologie }}</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { skills } from '@/services/MySkills'
</script>

<style scoped>
button {
  background-color: rgba(0, 0, 255, 0.393);
  width: calc(var(--spacing) * 40);
  border-radius: 0.25rem;
  color: white;
  height: 2.3rem;
  box-shadow: var(--shadow-xl);
}
</style>
