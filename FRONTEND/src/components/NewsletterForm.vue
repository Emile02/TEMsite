<template>
  <div class="newsletter-bg bg-red-200 sm:pt-3 sm:pb-3 md:pt-5 md:pb-5 xl:pt-10 xl:pb-10 w-[100%] flex flex-col justify-center">
  <div class="flex flex-row mx-auto">
    <h1 class="text-l font-thin sm:text-lg md:text-xl lg:text-2xl xl:text-4xl hover:text:2xl xl:mb-2">Recevez en exclusivité nos prochains menus</h1>
</div>
    <form class="newsletter-form rounded-lg opacity-50 mx-auto" @submit="handleSubmit">
      <div>
      <input class="newsletter-input mx-auto px-2 xl:pr-20" id="emailID" type="email" placeholder="Entrez votre adresse email" required>
        <button class="submit-button  items-center font-thin opacity-100 text-white hover:font-bold bg-black h-full px-8 xl:px-16" style="transition:all .09s ease-in-out" type="submit">
          <h1>S'inscrire</h1>
        </button>
      </div>
      <div class="mt-1 mx-auto">
        <input type="checkbox" id="checkConfidentiality" name="politiqueConfidentialite" required>
        <label class="ml-2 font-thin" for="checkConfidentiality">
          J'accepte la <a href="#" class="underline font-bold hover:text-white transition-all duration-500">politique de confidentialité</a>
        </label>
      </div>
  </form>
  </div>
</template>

<script>
import DataService from "../services/DataService.js"

export default {
  name: 'NewsletterForm',
  methods: {
    handleSubmit(event) {
      var nameInput = document.getElementById('emailID');
      event.preventDefault();
      console.log(nameInput.value);
      DataService.create(nameInput.value);
      console.log('Formulaire soumis');
      event.target.reset();
    },
  }
}
</script>

<style scoped>

.fa-circle-question:hover {
  color: white;
  cursor: pointer;  

}

.newsletter-form {
  opacity: 1;
}
.newsletter-input {
  background-color: coral;
  height: 80px;
}

.submit-button {
  background-color: coral;
  height: 80px;
}
.submit-button:hover {
  font-weight: bold;
  background-color: darkorange;
}


.transition-all {
  transition: all 0.5s ease-in-out;
}
</style>
