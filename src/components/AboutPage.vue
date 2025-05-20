<template>
  <main class="bg-gray-300 flex flex-grow flex-col items-center justify-center border">
    <h2 class="text-3xl mb-4">A Propos</h2>
    <div class="grid grid-cols-2">
      <div class="flex flex-col text-xl text-justify ml-40 p-2">
        <span class="mb-4"
          >Passionné par la tech et la création depuis toujours, j'ai décidé il y a cinq ans de me
          reconvertir dans le développement web. J'ai commencé par une année à Epitech, où j'ai
          appris le langage C et les bases de la programmation. En parallèle, j'ai développé des
          petits jeux avec Unity, ce qui m'a donné envie d'en apprendre plus.</span
        >

        <span class="mb-4"
          >J'ai ensuite continué à me former de manière autodidacte grâce à des formations en ligne
          (OpenClassrooms, Udemy, YouTube…). J'ai appris HTML, CSS, JavaScript et React, puis je me
          suis spécialisé en Vue.js.
        </span>
        <span class="mb-4">
          Je suis curieux, et j'aime créer des interfaces modernes qui répondent à des besoins
          concrets. Je continue d'apprendre chaque jour et je cherche à m'impliquer dans des projets
          motivants, seul ou en équipe.</span
        >
        <div class="flex justify-between mt-4">
          <router-link :to="{ path: '/skills' }">
            <button class="button">Mes skills</button>
          </router-link>
          <router-link :to="{ path: '/projects' }">
            <button class="button">Mes Projets</button>
          </router-link>
        </div>
      </div>

      <img
        src="@/assets/profil-picture.jpg"
        alt="photo de profil"
        class="w-120 ml-12 rounded shadow-xl"
      />
    </div>
  </main>
</template>

<script setup></script>

<style>
.button {
  background-color: rgba(0, 0, 255, 0.393);
  width: calc(var(--spacing) * 42);
  border-radius: 0.25rem;
  color: white;
  height: 2.6rem;
  box-shadow: var(--shadow-xl);
  border: none;
  cursor: pointer;
}
</style>
