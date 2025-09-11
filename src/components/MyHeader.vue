<template>
  <div class="flex p-4 items-center justify-between text-purple-900">
    <div class="flex gap-2 sm:gap-4 flex-wrap">
      <router-link :to="{ path: '/' }" class="title">Accueil</router-link>
      <router-link :to="{ path: 'about' }" class="title">A propos</router-link>
      <router-link :to="{ path: 'skills' }" class="title">Skills</router-link>
      <router-link :to="{ path: 'projects' }" class="title">Portfolio</router-link>
      <router-link :to="{ path: 'contact' }" class="title">Contact</router-link>
    </div>
    <div class="flex gap-4">
      <img
        @click="githubLink"
        src="@/assets/icons/icon-github.svg"
        alt="icon-github"
        class="size-8 sm:size-12 md:size-16"
      />
      <img
        @click="linkedinLink"
        src="@/assets/icons/icon-link.svg"
        alt="icon-linkedin"
        class="size-8 sm:size-12 md:size-16"
      />
    </div>
  </div>
</template>

<script setup>
function linkedinLink() {
  window.open('https://www.linkedin.com/in/mehdi-lenicque/', '_blank')
}
function githubLink() {
  window.open('https://github.com/ReadyToDevNow', '_blank')
}
</script>

<style scoped>
.bg {
  background: linear-gradient(180deg, #3c49ce45 0%, #dcbadd 100%);
}
.title:hover {
  text-decoration: underline;
  font-weight: bold;
}
</style>
