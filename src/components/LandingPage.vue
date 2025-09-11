<script setup>
function githubLink() {
  window.open('https://github.com/ReadyToDevNow', '_blank')
}
function sendMail() {
  window.location.href = 'mailto:sekourimehdi@gmail.com'
}
</script>

<template>
  <main class="flex flex-grow flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center text-white shadow-2xl p-4 gap-4 rounded">
      <div class="flex flex-col mb-4">
        <h2 class="text-3xl">Hello, I'm Mehdi</h2>
        <h2 class="text-3xl">a web developer</h2>
      </div>
      <div class="flex flex-col mb-4">
        <h3 class="text-xl">Welcome</h3>
      </div>
      <!--Section Buttons -->
      <div class="flex gap-4">
        <button>Mes Projets</button>
        <button @click="githubLink" class="flex gap-2 justify-center items-center">
          <img src="@/assets/icons/icon-github.svg" alt="icon-github" class="size-8" />
          <span>Github</span>
        </button>
        <button @click="sendMail" class="flex gap-2 justify-center items-center">
          <img src="@/assets/icons/icon-github.svg" alt="icon-github" class="size-8" />
          <span>Contact</span>
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
button {
  color: var(--color-white);
  border-radius: var(--radius-2xl);
  background-color: var(--color-gray-700);
  padding: 1.5rem;
  box-shadow: 0 0 0 2px #a359a5;
}
button:hover {
  background-color: #a359a5;
  box-shadow: 0 0 0 2px var(--color-gray-700);
}
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

main {
  background: linear-gradient(135deg, #2b338b 0%, #b873ba 100%);
}
</style>
