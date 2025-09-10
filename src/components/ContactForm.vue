<template>
  <main class="flex flex-grow flex-col items-center justify-center">
    <div class="w-500 max-w-md mx-auto my-10">
      <div class="text-4xl font-semibold flex justify-center mb-6 text-white">Contactez-moi</div>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        class="flex flex-col gap-4 bg-white rounded-lg p-6 shadow"
      >
        <!-- Replace with your Access Key -->
        <input type="hidden" name="access_key" value="1889e761-23ef-482c-8282-a7bfffc65afe" />

        <input
          placeholder="Nom"
          type="text"
          name="name"
          class="border border-purple-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          class="border border-purple-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <input
          placeholder="Numéro de Téléphone"
          type="text"
          name="telephone"
          class="border border-purple-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <textarea
          placeholder="Message"
          name="message"
          class="border border-purple-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
          rows="4"
        ></textarea>
        <!-- Honeypot Spam Protection -->
        <input type="checkbox" name="botcheck" class="hidden" style="display: none" />
        <!-- Custom Confirmation / Success Page -->
        <!-- <input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html"> -->
        <button
          type="submit"
          class="bg-purple-700 text-white font-semibold px-6 py-2 rounded hover:bg-purple-800 transition"
        >
          Envoyer
        </button>
      </form>
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
main {
  background: linear-gradient(135deg, #2b338b 0%, #b873ba 100%);
}
</style>
