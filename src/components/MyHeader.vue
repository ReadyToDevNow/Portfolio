<template>
  <div class="flex p-4 gap-4 items-center justify-between">
    <div class="flex gap-4">
      <router-link :to="{ path: '/' }">Accueil</router-link>
      <router-link :to="{ path: 'about' }">A propos</router-link>
      <router-link :to="{ path: 'skills' }">Skills</router-link>
      <router-link :to="{ path: 'projects' }">Portfolio</router-link>
    </div>
    <div class="flex gap-4">
      <img src="@/assets/icons/icon-github.svg" alt="icon-github" class="size-16" />
      <img src="@/assets/icons/icon-link.svg" alt="icon-linkedin" class="size-16" />
    </div>
  </div>
</template>

<style scoped></style>
