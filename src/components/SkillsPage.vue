<template>
  <main class="bg-gray-300 flex flex-grow flex-col items-center justify-center">
    <div class="flex flex-col mb-4 items-center">
      <span class="text-4xl p-4">Mes skills </span>
      <input placeholder="Rechercher..." />
      <div
        class="shadow-xl rounded grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 p-4 items-center justify-center"
      >
        <div
          v-for="(skill, idx) in skills"
          :key="skill"
          class="relative flex flex-col items-center"
        >
          <button @click="toggleDropdown(idx)" class="relative">
            <span>{{ skill.name }} ▼</span>
          </button>
          <div
            v-if="showDropdown[idx]"
            class="absolute top-full mt-2 bg-white border border-gray-300 rounded z-50"
          >
            <div class="flex flex-col items-center justify-center text-xs p-2">
              <span class="text-black font-bold whitespace-nowrap">
                {{ skill.description }}
              </span>
              <span class="text-black whitespace-nowrap">
                {{ skill.technologie }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { skills } from '@/services/MySkills'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showDropdown = ref(skills.map(() => false))

const dropdownRefs = ref([])

function toggleDropdown(idx) {
  // On ferme tous les dropdowns sauf celui cliqué
  showDropdown.value = showDropdown.value.map((open, i) => (i === idx ? !open : false))
}

function handleClickOutside(event) {
  showDropdown.value.forEach((open, idx) => {
    if (open && dropdownRefs.value[idx] && !dropdownRefs.value[idx].contains(event.target)) {
      showDropdown.value[idx] = false
    }
  })
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<style scoped>
button {
  background-color: rgba(0, 0, 255, 0.393);
  width: calc(var(--spacing) * 42);
  border-radius: 0.25rem;
  color: white;
  height: 2.6rem;
  box-shadow: var(--shadow-xl);
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
button:hover,
button:focus {
  background-color: #2980b9;
}
</style>
