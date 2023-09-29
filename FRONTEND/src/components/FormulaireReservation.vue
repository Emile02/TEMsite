<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold mb-4">Formulaire de réservation de table</h1>
    <form @submit.prevent="submitReservation">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="nom">
          Nom de la réservation :
        </label>
        <input v-model="nom"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nom" type="text" placeholder="Entrez le nom de la réservation" required />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="nom">
          Numéro de téléphone :
        </label>
        <input v-model="numero"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="number" type="tel" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
          placeholder="Exemple xx-xx-xx-xx-xx" required />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="heure">
          Heure de réservation :
        </label>
        <input v-model="heure"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="heure" type="text" pattern="[0-9]{2}:[0-9]{2}" placeholder="Exemple xx:xx" required />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="personnes">
          Nombre de personnes :
        </label>
        <input v-model="personnes"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="personnes" type="number" placeholder="Entrez le nombre de personnes" required />
      </div>
      <div class="flex justify-center">
        <button type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Réserver
        </button>
      </div>
    </form>
  </div>
</template>
  
<script>
import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      nom: '',
      numero: '',
      heure: '',
      personnes: '',
    };
  },
  methods: {
    submitReservation() {
      addDoc(collection(db, 'reservations'), {
        nom: this.nom,
        numero: this.numero,
        heure: this.heure,
        personnes: this.personnes,
      })
        .then((docRef) => {
          // Succès de l'enregistrement, récupérez l'ID du document ajouté
          const reservationId = docRef.id;

          // Envoi du message texte à l'aide de Firebase Cloud Messaging
          const message = `Nouvelle réservation - ID: ${reservationId}, Nom: ${this.nom}, Heure: ${this.heure}, Personnes: ${this.personnes}`;
          this.sendSmsMessage('+33671783492', message); // Remplacez '+33671783492' par le numéro de téléphone du destinataire

          // Réinitialisation des valeurs du formulaire
          this.nom = '';
          this.numero = '';
          this.heure = '';
          this.personnes = '';

          console.log('Réservation enregistrée avec succès dans Firestore!');
        })
        .catch((error) => {
          console.error('Erreur lors de l\'enregistrement de la réservation:', error);
        });
    },
  },
};
</script>