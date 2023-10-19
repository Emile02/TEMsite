<template>
    <div class="mb-24 space-y-4">
      <div>
        <h1 class="flex justify-center pt-10 mt-10 text-xl font-bold md:text-2xl lg:text-3xl md:mt-10 lg:mt-20" style="transition: all 1s ease-in-out">
          Nos offres Le TEM
        </h1>
        <h2 class="flex justify-center mt-4 text-sm font-thin uppercase text-yellow-800 md:text-2xl lg:text-3xl md:mt-6 lg:mt-10" style="transition: all 1s ease-in-out">
          Pour offrir à un proche !
        </h2>
      </div>
    </div>
  
    <div class="flex justify-center items-center h-24 w-full mb-24 space-x-24">
      <div class="space-y-8 flex justify-center items-center flex-col">
        <button class="rounded h-full w-48 bg-gray-800 hover:bg-gray-700 active:bg-gray-900 text-white font-light text-sm md:text-lg md:tracking-widest md:px-2 flex justify-center items-center">
          Venir récupérer votre bon à notre restaurant
        </button>
        <button class="rounded h-full bg-gray-800 hover:bg-gray-700 active:bg-gray-900 text-white font-light text-sm md:text-lg md:tracking-widest md:px-2 flex justify-center items-center">
          A l'adresse suivante: <br> 17 Grand Rue 54000 Nancy
        </button>
      </div>
      <div class="space-y-8 flex justify-center items-center flex-col">
        <button class="rounded h-full w-48 bg-gray-800 hover:bg-gray-700 active:bg-gray-900 text-white font-light text-sm md:text-lg md:tracking-widest md:px-2 flex justify-center items-center">
          Recevoir ou envoyer le bon !
        </button>
        <button class="rounded h-full py-4 bg-gray-800 hover:bg-gray-700 active:bg-gray-900 text-white font-light text-sm md:text-lg md:tracking-widest md:px-2 flex justify-center items-center" @click="afficherFormulaire = true">
          Je remplis le formulaire !
        </button>
      </div>
    </div>
  
    
    <div v-if="afficherFormulaire" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="modal">
        <form @submit.prevent="envoyerFormulaire" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-64">
          <h1 class="text-2xl mb-4 text-center">Formulaire de bon cadeau</h1>
          <div class="mb-4">
            <label for="nom" class="block text-gray-700 text-sm font-bold mb-2">Nom :</label>
            <input
              type="text"
              id="nom"
              v-model="nom"
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-4">
            <label for="prenom" class="block text-gray-700 text-sm font-bold mb-2">Prénom :</label>
            <input
              type="text"
              id="prenom"
              v-model="prenom"
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-4">
            <label for="adresse" class="block text-gray-700 text-sm font-bold mb-2">Adresse :</label>
            <input
              type="text"
              id="adresse"
              v-model="adresse"
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-4">
            <label for="telephone" class="block text-gray-700 text-sm font-bold mb-2">Numéro de téléphone :</label>
            <input
              type="tel"
              id="telephone"
              v-model="telephone"
              placeholder="0XXXXXXXXX"
              pattern="[0-9]{10}"
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-4">
            <label for="montant" class="block text-gray-700 text-sm font-bold mb-2">Montant du bon : (en €)</label>
            <input
              type="number"
              id="montant"  
              v-model="montant"
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-4">
            <label for="comment" class="block text-gray-700 text-sm font-bold mb-2">Commentaire</label>
            <input
              type="text"
              id="comment"  
              v-model="comment"
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="flex flex-row space-x-4 flex items-center justify-center">
          <div class="flex items-center justify-center">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Envoyer</button>
          </div>
          <div class="flex items-center justify-center">
            <button @click="afficherFormulaire = false" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Annuler</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import DataService from "../services/DataService.js"

  export default {
    data() {
      return {
        nom: "",
        prenom: "",
        adresse: "",
        telephone: "",
        email: "",
        montant: 0,
        comment: "",
        afficherFormulaire: false
      };
    },
    methods: {
      envoyerFormulaire() {
        const data = {
          nom: this.nom,
          prenom: this.prenom,
          adresse: this.adresse,
          telephone: this.telephone,
          email: this.email,
          montant: this.montant,
          comment: this.comment
        };
        
        this.nom = "";
        this.prenom = "";
        this.adresse = "";
        this.telephone = "";
        this.email = "";
        this.montant = "";
        this.comment = "";

        DataService.sendGiftCard(data);
        // console.log('Formulaire soumis');

        this.afficherFormulaire = false;
      }
    }
  };
  </script>
  