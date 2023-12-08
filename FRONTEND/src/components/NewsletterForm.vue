<template>
  <div class="newsletter-bg bg-[#778DA9] sm:pt-3 sm:pb-3 md:pt-5 md:pb-5 xl:pt-10 xl:pb-10 w-[100%] h-[20rem] flex flex-col justify-center">
  <div class="flex flex-row mx-auto">
    <h1 class="font-thin text-3xl text-white text-center sm:text-lg tracking-wider mb-2 md:text-xl lg:text-2xl xl:text-4xl  hover:text:2xl xl:mb-2">Recevez en exclusivité nos prochains menus !</h1>
</div>
    <form class="newsletter-form rounded-lg opacity-50 mx-auto" @submit="handleSubmit">
      <div>
      <input class="newsletter-input mx-auto px-2 xl:pr-20" id="emailID" type="email" placeholder="Entrez votre adresse email" required>
        <button class="submit-button  items-center font-thin opacity-100 text-white bg-[#9BABC0] px-8 xl:px-16" style="transition:all .09s ease-in-out" type="submit">
          <h1>S'inscrire</h1>
        </button>
      </div>
      <vue-friendly-captcha class="w-full" sitekey="FCMLP1VQ48JLJF8O" language="fr"/>
      <div class="mt-1">
        <input type="checkbox" id="checkConfidentiality" name="politiqueConfidentialite" required>
        <label class="ml-2 font-thin" for="checkConfidentiality"></label>
          J'accepte la <span class="underline font-bold hover:cursor-pointer hover:text-white transition-all duration-500">politique de confidentialité</span>
      </div>
  </form>
  </div>
</template>

<script>
import DataService from "../services/DataService.js"
import VueFriendlyCaptcha from '@somushq/vue3-friendly-captcha';

export default {
  components: {
      VueFriendlyCaptcha,
  },
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

<style>

.newsletter-form {
  opacity: 1;
}
.newsletter-input {
  background-color: #9BABC0;
  height: 80px;
}

.submit-button {
  background-color: #9BABC0;
  height: 80px;
}
.submit-button:hover {
  background-color: #566D8A;
}


.transition-all {
  transition: all 0.5s ease-in-out;
}
</style>
