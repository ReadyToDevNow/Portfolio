<template>
  <main class="flex flex-col items-center justify-center border">
    <h2 class="text-3xl mb-2 mt-2">A Propos</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:ml-40 p-8 items-center justify-center">
      <div class="flex flex-col text-xl text-justify">
        <span class="mb-4"
          >Passionné par la tech, la création et le gaming depuis toujours, j'ai décidé il y a cinq
          ans de me reconvertir dans le développement web. En formation chez Epitech, où j'ai appris
          le langage C et les bases de la programmation. En parallèle, j'ai développé des petits
          jeux avec Unity.</span
        >

        <span class="mb-4"
          >La formation continue grâce à des formations en ligne (OpenClassrooms, Udemy, YouTube…).
          J'ai appris HTML, CSS, JavaScript et React, puis je me suis spécialisé en Vue.js.
        </span>
        <span class="mb-4">
          En Janvier 2024 j'ai eu la chance de progresser en tant que Développeur front-end au coté
          d'un senior avec plus de 10 années d'expertises. Ensemble nous avons construit un
          dashboard permettant de visualiser et de gérer un parc informatique.
        </span>
        <span class="mb-4">
          Je suis curieux, j'aime créer et trouver des solutions qui répondent à des besoins
          concrets. Je continue d'apprendre chaque jour et cherche à m'impliquer dans des projets
          .</span
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

<style scoped>
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
main {
  background: linear-gradient(135deg, #2b338b 0%, #b873ba 100%);
}
span {
  text-size-adjust: 100%;
}
</style>
