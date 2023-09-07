<template>
  <div class="newsletter-bg flex flex-col items-center">
    <h1 class="text-4xl font-thin mt-10 mb-6">Recevez en exclu nos prochains menu</h1>
    <form class="newsletter-form flex flex-col items-center rounded-lg w-2/6  opacity-50" @submit="handleSubmit">
      <div class="flex justify-between w-full">
        <input class="newsletter-input" type="email" placeholder="Entrez votre adresse email" required>
        <button class="submit-button flex items-center font-thin opacity-100 text-white hover:font-bold bg-black h-full px-4" style="transition:all 1s ease-in-out" type="submit">
          <h1>S'inscrire</h1>
        </button>
      </div>
      <div class="flex items-center mt-1">
        <input type="checkbox" id="checkConfidentiality" name="politiqueConfidentialite" required>
        <label class="ml-2 font-thin" for="checkConfidentiality">
          J'accepte la <a href="#" class="underline font-bold hover:text-white transition-all duration-500">politique de confidentialité</a>
        </label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewsletterForm',
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      console.log('Formulaire soumis');
      event.target.reset();
    }
  }
}
</script>

<style scoped>
.newsletter-bg {
  background-color: burlywood;
  height: 25vh;
  width: 100%;
}

.newsletter-form {
  opacity: 1;
}

.submit-button {
  background-color: coral;
  height: 80px;
  width: 450px;
}
.submit-button:hover {
  font-weight: bold;
  background-color: darkorange;
}

.newsletter-input {
  background-color: coral;
  width: 1000px;
  height: 80px;
}

.transition-all {
  transition: all 0.5s ease-in-out;
}
</style>
