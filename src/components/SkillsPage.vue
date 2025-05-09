<template>
  <main class="bg-gray-300 flex flex-grow flex-col items-center justify-center">
    <div class="flex flex-col mb-4 items-center">
      <span class="text-4xl p-4">Mes skills </span>
      <input placeholder="Rechercher..." />

      <div class="shadow-xl rounded grid grid-cols-4 gap-6 p-4">
        <button>HTML 5</button>
        <button>CSS3</button>
        <button>Javascript</button>
        <button>Vue.Js</button>
        <button>Vite</button>
        <button>Tailwind</button>
        <button>Pinia</button>
        <button>Canvas</button>
        <button>NodeJs</button>
        <button>React</button>
        <button>Gitlab</button>
        <button>Primevue</button>
        <button>Windows</button>
        <button>Emacs</button>
        <button>Unity</button>
        <button>C</button>
      </div>
    </div>
  </main>
</template>

<script setup></script>

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
