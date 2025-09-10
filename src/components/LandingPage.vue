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
        <span class="text-3xl">Hello, I'm Mehdi, </span>
        <span class="text-3xl">a web developer</span>
      </div>
      <div class="flex flex-col mb-4">
        <span>Passionné de longue date,</span>
        <span>Spécialiste en Vue Js</span>
      </div>
      <!--Section Buttons -->
      <div class="flex gap-4">
        <button>Mes Projets</button>
        <button @click="githubLink" class="flex gap-2 items-center">
          <img src="@/assets/icons/icon-github.svg" alt="icon-github" class="size-8" />
          <span>Github</span>
        </button>
        <button @click="sendMail" class="flex gap-2 items-center">
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
main {
  background: linear-gradient(135deg, #2b338b 0%, #b873ba 100%);
}
</style>
