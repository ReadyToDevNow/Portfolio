<template>
  <main class="bg-gray-300 flex flex-grow flex-col items-center justify-center">
    <div class="flex flex-col mb-4 items-center">
      <span class="text-4xl p-4">Mes skills </span>
      <!-- Barre de recherche -->
      <div class="relative border mb-4">
        <input
          v-model="search"
          placeholder="Rechercher une compétence..."
          @focus="onInputFocus"
          class="px-4 py-2 border rounded pr-10"
        />
        <!-- Boutton effacer -->
        <button
          @click="clearSearch"
          class="absolute right-3 top-2.5 text-gray-500 hover:text-black"
        >
          ❌
        </button>

        <!-- Suggestion de technologies Dynamique -->
        <div
          v-if="showSuggestions"
          class="absolute top-full bg-white border border-gray-300 rounded shadow z-50"
        >
          <ul class="">
            <li
              v-for="(tech, i) in filteredSuggestions"
              :key="i"
              @click="selectSuggestion(tech)"
              class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs whitespace-nowrap"
            >
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>
      <!-- Liste de skills filtrée -->
      <div
        class="shadow-xl rounded grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 p-4 items-center justify-center"
      >
        <div
          v-for="(skill, idx) in filteredSkills"
          :key="skill"
          class="relative flex flex-col items-center"
        >
          <button @mousedown.stop @click="toggleDropdown(idx)" class="relative button">
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const showDropdown = ref(skills.map(() => false))
const search = ref('')
const showSuggestions = ref(false)

// 2. Extraire toutes les technologies uniques
const uniqueTechnologies = computed(() => {
  const set = new Set(skills.map((skill) => skill.technologie))
  return Array.from(set)
})

// 3. Filtrer les suggestions selon la recherche
const filteredSuggestions = computed(() => {
  if (!search.value) return uniqueTechnologies.value
  return uniqueTechnologies.value.filter((tech) =>
    tech.toLowerCase().includes(search.value.toLowerCase()),
  )
})

// 4. Choisir une suggestion
function selectSuggestion(tech) {
  search.value = tech
  showSuggestions.value = false
  closeDropdowns()
}

// Liste filtrée selon la technologie
const filteredSkills = computed(() => {
  return skills.filter((skill) =>
    skill.technologie.toLowerCase().includes(search.value.toLowerCase()),
  )
})

function onInputFocus() {
  // Toujours montrer les suggestions au focus
  search.value = ''
  showSuggestions.value = true
}

function clearSearch() {
  search.value = ''
  showSuggestions.value = true
}

function toggleDropdown(idx) {
  // On ferme tous les dropdowns sauf celui cliqué
  showDropdown.value = showDropdown.value.map((open, i) => (i === idx ? !open : false))
}

function closeDropdowns() {
  showDropdown.value = showDropdown.value.map(() => false)
}

onMounted(() => {
  document.addEventListener('mousedown', closeDropdowns)
})
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', closeDropdowns)
})
</script>

<style scoped>
.button {
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
