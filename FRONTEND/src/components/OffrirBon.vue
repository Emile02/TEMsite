<template>
    <div class="mb-10 space-y-4">
      <div>
        <h1 class="flex justify-center pt-10 mt-10 text-xl font-bold md:text-2xl lg:text-3xl md:mt-10 lg:mt-20" style="transition: all 1s ease-in-out">
          Nos offres Le TEM
        </h1>
        <h2 class="flex justify-center mt-4 text-lg font-thin uppercase text-yellow-800 md:text-2xl lg:text-3xl md:mt-6 lg:mt-10" style="transition: all 1s ease-in-out">
          Pour offrir à un proche !
        </h2>
        <p class="font-light pl-5 pr-5 mt-4 text-justify md:pl-10 md:pr-10 md:mt-5 lg:pr-20 lg:pl-20 lg:mt-10 xl:pr-48 xl:pl-48 2xl:pr-72 2xl:pl-72 2xl:text-lg 3xl:pr-[350px] 3xl:pl-[350px]">
          Le Tem est un <strong class="font-bold">restaurant semi-gastronomique</strong> situé au <strong class="font-bold">cœur de la Vieille Ville de Nancy</strong>, offrant une expérience culinaire de qualité. Nous mettons un point d'honneur à travailler avec des <strong class="font-bold">produits frais</strong> et des <strong class="font-bold">producteurs locaux</strong> pour garantir une qualité irréprochable à nos plats ! Notre équipe de cuisine allie <strong class="font-bold">savoir-faire</strong> et <strong class="font-bold">créativité</strong> pour vous faire découvrir de nouvelles saveurs et des dressages élaborés.
        </p>
      </div>
    </div>
  
    <div class="flex justify-center items-center h-24 w-full mb-24 space-x-24">
      <div class="space-y-8 flex justify-center items-center flex-col">
        <h2 class="flex justify-center text-lg font-light uppercase text-yellow-800 md:text-2xl lg:text-3xl md:mt-6 lg:mt-10" style="transition: all 1s ease-in-out">
          Pour recevoir ou envoyer le bon,
        </h2>
        <button class="rounded h-full py-4 p-4 bg-gray-800 hover:bg-gray-700 active:bg-gray-900 text-white font-light text-sm md:text-lg md:tracking-widest md:px-2 flex justify-center items-center" @click="afficherFormulaire = !afficherFormulaire" v-if="!afficherFormulaire">
          Je remplis le formulaire !
        </button>
      </div>
    </div>
  
    
    <div v-if="afficherFormulaire">
      <h1 class="text-2xl mb-4 text-center">Formulaire de bon cadeau</h1>
        <form @submit.prevent="envoyerFormulaire" class="px-8 pt-6 pb-8 mb-4" method="post">
          <div class="flex flex-col md:flex-row md:space-x-14 justify-center">
            <div class="#1">
              <h2 class="text-xl font-bold mb-4 text-center">De la part de :</h2>
              <div class="mb-4">
                <label for="senderLastname" class="block text-gray-700 text-sm font-bold mb-2">Nom :</label>
                  <input
                    type="text"
                    id="senderLastname"
                    v-model="senderLastname"
                    required
                    class="outline-none w-full bg-transparent placeholder-gray-blue placeholder-opacity-50 border-b border-b-gray-blue border-opacity-50 focus:border-b-indigo-500 "
                  />
              </div>
              <div class="mb-4">
                <label for="senderName" class="block text-gray-700 text-sm font-bold mb-2">Prénom :</label>
                <input
                  type="text"
                  id="senderName"
                  v-model="senderName"
                    required
                  class="outline-none w-full bg-transparent placeholder-gray-blue placeholder-opacity-50 border-b border-b-gray-blue border-opacity-50 focus:border-b-indigo-500 "
                />
              </div>
              <div class="mb-4">
                <label for="senderPhone" class="block text-gray-700 text-sm font-bold mb-2">Numéro de téléphone :</label>
                <input
                  type="tel"
                  id="senderPhone"
                  v-model="senderPhone"
                  placeholder="0XXXXXXXXX"
                  required
                  pattern="[0-9]{10}"
                  class="outline-none w-full bg-transparent placeholder-gray-blue placeholder-opacity-50 border-b border-b-gray-blue border-opacity-50 focus:border-b-indigo-500 "
                />
              </div>
              <div class="mb-4">
                <label for="senderEmail" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                  type="email"
                  id="senderEmail"
                  v-model="senderEmail"
                  required
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  class="outline-none w-full bg-transparent placeholder-gray-blue placeholder-opacity-50 border-b border-b-gray-blue border-opacity-50 focus:border-b-indigo-500 "
                />
              </div>
            </div>
            <div class="#2">
              <h2 class="text-xl font-bold mb-4 text-center">A l'intention de :</h2>
              <div class="mb-4">
                <label for="receiverLastname" class="block text-gray-700 text-sm font-bold mb-2">Nom :</label>
                <input
                  type="text"
                  id="receiverLastname"
                  v-model="receiverLastname"
                  required
                  class="outline-none w-full bg-transparent placeholder-gray-blue placeholder-opacity-50 border-b border-b-gray-blue border-opacity-50 focus:border-b-indigo-500 "
                />
              </div>
              <div class="mb-4">
                <label for="receiverName" class="block text-gray-700 text-sm font-bold mb-2">Prénom :</label>
                <input
                  type="text"
                  id="receiverName"
                  v-model="receiverName"
                  required
                  class="outline-none w-full bg-transparent placeholder-gray-blue placeholder-opacity-50 border-b border-b-gray-blue border-opacity-50 focus:border-b-indigo-500 "
                />
              </div>
              <div class="mb-4 flex justify-center">
                <label for="sendEmailToGiftReceiver" class="text-sm pr-2">Avertir le destinaire ?</label>
                <input
                  type="checkbox"
                  id="sendEmailToGiftReceiver"
                  
                  v-model="sendEmailToGiftReceiver"
                  />
              </div>
              <div :class="{'invisible' : !sendEmailToGiftReceiver}" class="mb-4">
                <label for="receiverEmail" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                  type="text"
                  id="receiverEmail"
                  v-model="receiverEmail"
                  
                  class="outline-none w-full bg-transparent placeholder-gray-blue placeholder-opacity-50 border-b border-b-gray-blue border-opacity-50 focus:border-b-indigo-500 "
                />
              </div>
            </div>
            <div class="#3">
              <h2 class="text-xl font-bold mb-4 text-center">Informations complémentaires</h2>
              <div class="mb-4">
                <label for="senderAdress" class="text-center block text-gray-700 text-sm font-bold mb-2">Adresse :</label>
                <input
                  type="text"
                  id="senderAdress"
                  v-model="senderAdress"
                  required
                  class="outline-none w-full bg-transparent placeholder-gray-blue placeholder-opacity-50 border-b border-b-gray-blue border-opacity-50 focus:border-b-indigo-500 "
                />
              </div>
              <div class="mb-4">
                <label for="montant" class="text-center block text-gray-700 text-sm font-bold mb-2">Montant du bon : (en €)</label>
                <input
                  type="number"
                  id="montant"  
                  v-model="montant"
                  required
                  class="outline-none w-full bg-transparent placeholder-gray-blue placeholder-opacity-50 border-b border-b-gray-blue border-opacity-50 focus:border-b-indigo-500 "
                />
              </div>
              <div class="mb-4">
                <label for="comment" class="text-center block text-gray-700 text-sm font-bold mb-2">Commentaire</label>
                <input
                  type="text"
                  id="comment"  
                  v-model="comment"
                  class="outline-none w-full bg-transparent placeholder-gray-blue placeholder-opacity-50 border-b border-b-gray-blue border-opacity-50 focus:border-b-indigo-500 "
                />
              </div>
            </div>
          </div>
          <vue-friendly-captcha class="hidden" sitekey="FCMLP1VQ48JLJF8O" language="fr"/>
          <h1 class="text-2xl mb-4 text-center">Méthodes de paiement</h1>
          <h1 class="text-xl mb-4 font-thin text-center">Chosissez comment vous souhaitez régler ce bon cadeau</h1>
          <h1 class="text-xl text-red-700 font-bold mb-4  text-center">Vous devez choisir obligatoirement une des méthodes !</h1>
          <div class="flex flex-col space-y-4 items-center">
            <input
            type="checkbox"
            id="payWithIBAN"
            name="option"
            v-model="payWithIBAN"
            @change="uncheckOthers('payWithIBAN')"
            
            />
            <label for="payWithIBAN">Payer par virement bancaire</label>

            <button
              type="button"
              @click="openPDF('https://drdh.fr/RIB-LE-TEM.pdf')"
              class="rounded bg-tem-yellow p-2 hover:bg-tem-yellow-hover"
              :class="{'pointer-events-none' : !payWithIBAN}"
              >Télécharger notre RIB ! </button>
            <label for="file" class="text-center block text-gray-700 text-sm font-bold mb-2">Preuve de virement</label>
            <input
              type="file"
              @change="onFileChange"
              id="file"
              accept="application/pdf"
              :class="{'pointer-events-none' : !payWithIBAN}"
              class="outline-none w-fit bg-transparent placeholder-gray-blue placeholder-opacity-50 border-b border-b-gray-blue border-opacity-50 focus:border-b-indigo-500 "
            />
            <h1 class="block w-1/2 h-0.5 bg-black"></h1>

            <input
            type="checkbox"
            id="payWithPaypal"
              name="option"
              v-model="payWithPaypal"
              
              @change="uncheckOthers('payWithPaypal')"
              />
            <label for="payWithPaypal">Payer avec PayPal</label>
       
            <div class="flex justify-center items-center z-0" :class="{'pointer-events-none' : !payWithPaypal}">
              <CheckoutPayment/>
            </div>
            
            <h1 class="block w-1/2 h-0.5 bg-black"></h1>
            <input
              type="checkbox"
              id="payOnPlace"
              name="option"
              v-model="payOnPlace"
              @change="uncheckOthers('payOnPlace')"
            />
            <label for="payOnPlace">Payer sur place</label>
          <div class="rounded border-2 shadow-inner p-4">
            <p class=" mb-4 text-center">Sur place au:</p>
            <p class=" mb-4 text-center">17 Grande Rue 54000 NANCY</p>
          </div>
          </div>
          
          <div class="flex flex-row space-x-4 items-center justify-center md:mt-5">
          <div class="flex items-center justify-center">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Envoyer</button>
          </div>
          <div class="flex items-center justify-center">
            <button @click="afficherFormulaire = false" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Annuler</button>
          </div>
        </div>
        
        </form>
    </div>
  </template>
  
  <script>
  import DataService from "../services/DataService.js"
  import VueFriendlyCaptcha from '@somushq/vue3-friendly-captcha';
  import CheckoutPayment from "../components/paypal/CheckoutPayment.vue";
  

  export default {
    components: {
      VueFriendlyCaptcha,
      CheckoutPayment,
  },
    data() {
      return {
        afficherFormulaire: false,
        senderLastname: "",
        senderName: "",
        senderAdress: "",
        senderPhone: "",
        senderEmail: "",
        montant: 0,
        comment: "",
        receiverLastname: "",
        receiverName: "",
        receiverEmail: "",
        showReceiverEmail: false,
        sendEmailToGiftReceiver: false,
        ibanFile: null,
        payWithIBAN: false,
        payWithPaypal: false,
        payOnPlace: false,
        howToPay: null,
        fileToSend: null,
      };
    },
    methods: {
      openPDF(url) {            
            window.open(url, '_blank');
      },
      uncheckOthers(selectedOption) {
      if (selectedOption === 'payWithIBAN') {
        this.payOnPlace = false;
        this.payWithPaypal = false;
      } else if (selectedOption === 'payOnPlace') {
        this.payWithIBAN = false;
        this.payWithPaypal = false;
      } else if (selectedOption === 'payWithPaypal') {
        this.payWithIBAN = false;
        this.payOnPlace = false;
      }
      this.howToPay = selectedOption;
      
    },
      onFileChange(event) {
      this.ibanFile = event.target.files[0];
      console.log(this.ibanFile);
    },
      eraseFormValues() {
        this.senderLastname = "";
        this.senderName = "";
        this.senderAdress = "";
        this.senderPhone = "";
        this.senderEmail = "";
        this.montant = "";
        this.comment = "";
        this.receiverLastname = "";
        this.receiverName = "";
        this.receiverEmail = "";
        this.showReceiverEmail = false;
        this.sendEmailToGiftReceiver = false;
        this.ibanFile = "";
        
      },
      async envoyerFormulaire() {
        const formData = new FormData();
        formData.append('file', this.ibanFile);
        const data = {
          senderLastname: this.senderLastname,
          senderName: this.senderName,
          senderAdress: this.senderAdress,
          senderPhone: this.senderPhone,
          senderEmail: this.senderEmail,
          montant: this.montant,
          comment: this.comment,
          receiverLastname: this.receiverLastname,
          receiverName: this.receiverName,
          receiverEmail: this.receiverEmail,
          sendEmailToGiftReceiver: this.sendEmailToGiftReceiver,
          fileToSend: formData,
          howToPay: this.howToPay === null ? "payWithIBAN" : this.howToPay,
        };
        
        if (this.ibanFile) {
          await DataService.uploadIBAN(formData);

        }

        if (this.payWithIBAN && this.ibanFile === null) {
          alert("Vous devez télécharger notre RIB et nous envoyer une preuve de virement pour valider votre commande !");
          return;
        }

        DataService.sendGiftCard(data);

        this.eraseFormValues();
        this.afficherFormulaire = false;

      }
    },
    mounted() {
      this.payWithIBAN = true;
    },
    watch: {
      senderChecked: function(newVal) {
        if (newVal) {
          this.receiverChecked = false;
        }
      },
      showReceiverEmail: function(newVal) {
        if (newVal) {
          this.sendEmailToGiftReceiver = false;
        }
      }
    }
  };
  </script>
  