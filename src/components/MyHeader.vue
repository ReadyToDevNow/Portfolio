<script setup>
function linkedinLink() {
  window.open('https://www.linkedin.com/in/mehdi-lenicque/', '_blank')
}
function githubLink() {
  window.open('https://github.com/ReadyToDevNow', '_blank')
}
</script>
<template>
  <div class="flex p-4 gap-4 items-center justify-between">
    <div class="flex gap-4">
      <router-link :to="{ path: '/' }">Accueil</router-link>
      <router-link :to="{ path: 'about' }">A propos</router-link>
      <router-link :to="{ path: 'skills' }">Skills</router-link>
      <router-link :to="{ path: 'projects' }">Portfolio</router-link>
    </div>
    <div class="flex gap-4">
      <img
        @click="githubLink"
        src="@/assets/icons/icon-github.svg"
        alt="icon-github"
        class="size-16"
      />
      <img
        @click="linkedinLink"
        src="@/assets/icons/icon-link.svg"
        alt="icon-linkedin"
        class="size-16"
      />
    </div>
  </div>
</template>

<style scoped></style>
