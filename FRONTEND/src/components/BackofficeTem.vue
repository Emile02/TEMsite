<template>
  <div>

    <!-- Backoffice avec mot de passe -->
    <div v-if="showBackoffice">
      <button @click="sendNewsletterMail"
        class="py-2 rounded text-white px-4 bg-red-700 hover:bg-red-500 active:bg-red-800">Appui fdp</button>

      <!-- <button @click="changeImage" class="rounded text-white px-4 bg-red-700 hover:bg-red-500 active:bg-red-800">Changer l'image</button>
        <img :src="imageUrl" alt="Image dynamique" class="rounded-lg w-20 h-20"> -->

      <!-- create a button to hide and show my ul -->
      <!-- <button @click="show = !show" class="py-2 rounded text-white px-4 bg-blue-700 hover:bg-blue-500 active:bg-blue-800">Afficher les images</button> -->
      <!-- use a v-if to show my ul if show is true -->
      <!-- <ul v-if="show" class="overflow-y-auto flex flex-col w-fit space-y-2 h-96 mt-2 border-r-4 border-b-4">
          <li v-for="image in imageAvailable" :key="image" class="flex flex-row">
            <img :src="image" alt="Image dynamique" class="rounded-lg w-20 h-20">
            <div class="flex flex-col">
            <h1>{{ image }}</h1>
            <button @click="copyImgLink(image)" class="rounded text-white px-4 bg-blue-700 hover:bg-blue-500 active:bg-blue-800">Copier le lien</button>
          </div>
          </li>
        </ul> -->
    </div>

    <!-- Popup pour le mot de passe -->
    <div v-if="!showBackoffice"
      class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div class="bg-white p-6 rounded shadow-md">
        <h3 class="mb-4">Entrez le mot de passe</h3>
        <input v-model="password" type="password" class="border p-2 mb-2 w-full">
        <br><br>
        <button @click="loginUser" class="bg-blue-500 text-white px-4 py-2 rounded">Valider</button>
      </div>
    </div>
  </div>
</template>
  
<script>
import DataService from "../services/DataService.js";
import http from "../http-common";
import store from "../../store";

export default {
  data() {
    return {
      password: '',
      showBackoffice: false,
      emailsNewsletter: [],
      imageAvailable: [],
      show: false,
      imageUrl: localStorage.getItem('imageUrl') || 'https://drdh.fr/4I8A4126.jpg',
    };
  },
  methods: {
    async copyImgLink(image) {
      await navigator.clipboard.writeText('');
      await navigator.clipboard.writeText(image);
    },
    async getAllPhotos() {
      try {
        const response = await http.get("/photos");
        console.log("response.data", response.data);
        response.data.forEach(element => {
          this.imageAvailable.push("https://drdh.fr/" + element);
        });
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    },
    changeImage() {
      const url = prompt('URL de l\'image', 'https://drdh.fr/');
      if (!url) return;
      this.imageUrl = url;
      localStorage.setItem('imageUrl', this.imageUrl);
    },
    async loginUser() {
      try {
        const response = await DataService.checkPassword(this.password);
        if (response.status === 200 && response.data.token) {
          this.showBackoffice = true;
          store.commit('SET_TOKEN', response.data.token);
        } else {
          alert('Mot de passe incorrect');
        }
      } catch (error) {
        console.error(error);
        alert('Une erreur s\'est produite');
      }
    },
    async sendNewsletterMail() {
      try {
        // Efface le presse-papiers
        await navigator.clipboard.writeText('');

        const response = await DataService.sendNewsletterMail();
        if (response) {
          this.emailsNewsletter = [];
          response.data.forEach(element => {
            this.emailsNewsletter.push(element.email);
          });

          await navigator.clipboard.writeText(this.emailsNewsletter.join('\n'));
          alert('Emails copiés dans le presse-papier');
        } else {
          alert('Une erreur s\'est produite');
        }
      } catch (error) {
        console.error(error);
        alert('Une erreur s\'est produite');
      }
    }
  },
  created() {
    // this.getAllPhotos();
  }
};
</script>
  
<style>
/* Styles Tailwind CSS ou classes personnalisées ici */
</style>
  