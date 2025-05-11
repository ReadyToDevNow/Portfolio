<template>
  <main class="bg-gray-300 flex flex-grow flex-col items-center justify-center">
    <div class="flex flex-col mb-4 items-center">
      <span class="text-4xl p-4">Mes skills </span>
      <input placeholder="Rechercher..." />
      <div class="shadow-xl rounded grid grid-cols-4 gap-6 p-4">
        <div v-for="(skill, idx) in skills" :key="skill">
          <button @click="showDropdown[idx] = !showDropdown[idx]">
            <span>{{ skill.name }} ▼</span>
            <div
              v-if="showDropdown[idx]"
              style="background: #fff; border: 1px solid #ccc; margin-top: 4px; min-width: 120px"
            >
              <span class="p-2 text-black">{{ skill.technologie }}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { skills } from '@/services/MySkills'
import { ref } from 'vue'

const showDropdown = ref(skills.map(() => false))
</script>

<style scoped>
button {
  background-color: rgba(0, 0, 255, 0.393);
  width: calc(var(--spacing) * 40);
  border-radius: 0.25rem;
  color: white;
  height: 2.3rem;
  box-shadow: var(--shadow-xl);
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
button:hover,
button:focus {
  background-color: #2980b9;
}

/* The container <div> - needed to position the dropdown content */

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  min-width: 160px;
  display: none;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  display: none;

  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {
  display: block;
}
</style>
