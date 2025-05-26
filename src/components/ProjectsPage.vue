<template>
  <main class="bg-gray-300 flex flex-grow flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center mb-4">
      <span class="text-3xl font-bold mb-2">Mes projets</span>
      <span class="text-xs">
        Ci-dessous, quelques exemples de réalisations effectuées durant ma vie de developpeur
      </span>
    </div>
    <!-- Les Cards Projects-->
    <div class="grid grid-cols-4 bg p-2">
      <div class="flex flex-col items-center p-4">
        <span class="font-bold">Titre</span>
        <span class="mb-4">Technologie utilisé</span>
        <img src="@/assets/poke.png" class="" alt="" />
      </div>
      <!-- 2ème projet-->
      <div class="flex flex-col items-center p-4">
        <span class="font-bold">Titre</span>
        <span class="mb-4">Technologie utilisé</span>
        <img src="@/assets/poke.png" class="" alt="" />
      </div>
      <!--3ème projet-->
      <div class="flex flex-col items-center p-4">
        <span class="font-bold">Titre</span>
        <span class="mb-4">Technologie utilisé</span>
        <img src="@/assets/poke.png" class="" alt="" />
      </div>
      <!--4 ème projet-->
      <div class="flex flex-col items-center p-4">
        <span class="font-bold">Titre</span>
        <span>Technologie utilisé</span>
        <img src="@/assets/poke.png" class="" alt="" />
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style>
.bg {
  background-color: rgba(0, 0, 255, 0.393);
}
</style>
