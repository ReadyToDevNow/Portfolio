<template>
  <div class="flex p-4 gap-4 items-center justify-between">
    <div class="flex gap-4">
      <span>Accueil</span>
      <router-link :to="{ path: 'about' }">A propos</router-link>

      <span>Skills</span>
      <span>Mes Projets</span>
      <span>Contact</span>
    </div>
    <div class="flex gap-4">
      <img src="@/assets/icons/icon-github.svg" alt="icon-github" class="size-16" />
      <img src="@/assets/icons/icon-link.svg" alt="icon-linkedin" class="size-16" />
    </div>
  </div>
</template>

<style scoped></style>
