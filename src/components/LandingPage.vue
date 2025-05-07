<script setup>
import MyHeader from './MyHeader.vue'
import MyFooter from './MyFooter.vue'

function GithubLink() {
  window.open('https://github.com/ReadyToDevNow', '_blank')
}
</script>

<template>
  <body class="flex flex-col min-h-screen">
    <header>
      <MyHeader />
    </header>
    <main class="bg-gray-300 flex flex-grow flex-col items-center justify-center">
      <div class="flex flex-col mb-4">
        <span class="text-3xl">Hello, I'm Mehdi, </span>
        <span class="text-3xl">a web developer</span>
      </div>
      <div class="flex flex-col mb-4">
        <span>Passionné de longue date,</span>
        <span>Spécialiste en Vue Js</span>
      </div>
      <div class="flex gap-2">
        <button class="p-6">Mes Projets</button>
        <button @click="GithubLink" class="p-6">Github</button>
        <button class="p-6">Contact</button>
      </div>
    </main>
    <footer class="bg-gray-800 shadow-sm dark:bg-gray-800 mt-auto">
      <MyFooter />
    </footer>
  </body>
</template>

<style scoped>
button {
  color: var(--color-white);
  border-radius: var(--radius-2xl);
  background-color: var(--color-gray-700);
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

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
