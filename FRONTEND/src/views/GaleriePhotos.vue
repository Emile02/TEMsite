<!-- GaleriesPhotos.vue -->
<template>
  <HeaderSite/>
  <div class="mb-5 md:mb-10 lg:mb-20 space-y-4">
    <div>
        <h1 class="flex justify-center pt-10 mt-10 text-xl font-bold md:text-2xl lg:text-3xl md:mt-10 lg:mt-20" style="transition:all 1s ease-in-out">Galerie Photos du restaurant Le TEM</h1>
        <h2 class="flex justify-center mt-4 text-xl font-thin uppercase text-yellow-800 md:text-2xl lg:text-3xl md:mt-6 lg:mt-10" style="transition:all 1s ease-in-out">Restaurant avec terrasse à nancy</h2>
    </div>
    <div class="flex justify-center items-center h-14 w-full mb-8 space-x-8 pl-4 pr-4">
        <button v-if="this.canShowPhotos" type="button" class="rounded h-full w-28 md:w-44 bg-gray-800 hover:bg-gray-700 active:bg-gray-900 text-white font-light text-sm md:text-lg md:tracking-widest md:px-2 flex justify-center items-center">Les plats</button>
        <button v-if="!this.canShowPhotos" type="button" class="rounded h-full w-28 md:w-44 bg-gray-300 text-white font-light text-sm md:text-lg md:tracking-widest md:px-2 flex justify-center items-center" title="Nous mettons à jour cette section !">Les plats</button>
        <button type="button" class="rounded h-full w-28 md:w-44 bg-gray-300 text-white font-light text-sm md:text-lg md:tracking-widest md:px-2 flex justify-center items-center pointer-events-none">Le Restaurant</button>
        <button type="button" class="rounded h-full w-28 md:w-44 bg-gray-300 text-white font-light text-sm md:text-lg md:tracking-widest md:px-2 flex justify-center items-center pointer-events-none">Les Evènements</button>
    </div>
</div>
    <div id="galerie-photos" v-if="this.canShowPhotos">
      <div class="space-y-4 pb-10">
        <div class="h-48 md:h-96 flex flex-row space-x-4 px-6 md:px-24">
          <div class="basis-1/2 bg-transparent border-black">
            <img :src="photos[0]" alt="photo" class="w-full h-full object-cover"/>
          </div>
          <div class="basis-1/2 bg-transparent border-black">
            <img :src="photos[1]" alt="photo" class="w-full h-full object-cover"/>
          </div>
        </div>
        <div class="h-48 md:h-96 flex flex-row space-x-4 px-6 md:px-24">
          <div class="basis-1/2 bg-transparent border-black">
            <img :src="photos[2]" alt="photo" class="w-full h-full object-cover"/>
          </div>
          <div class="basis-1/2 bg-transparent border-black">
            <img :src="photos[3]" alt="photo" class="w-full h-full object-cover"/>
          </div>
        </div>
        <div class="h-48 md:h-96 flex flex-row space-x-4 px-6 md:px-24">
          <div class="basis-1/2 md:basis-1/2 bg-transparent border-black">
            <img :src="photos[4]" alt="photo" class="w-full h-full object-cover"/>
          </div>
          <div class="basis-1/2 bg-transparent border-black">
            <img :src="photos[5]" alt="photo" class="w-full h-full object-cover"/>
          </div>
        </div>
        <div class="h-48 md:h-96 flex flex-row space-x-4 px-6 md:px-24">
          <div class="basis-1/2 bg-transparent border-black">
            <img :src="photos[6]" alt="photo" class="w-full h-full object-cover"/>
          </div>
          <div class="basis-1/2 bg-transparent border-black">
            <img :src="photos[7]" alt="photo" class="w-full h-full object-cover"/>
          </div>
        </div>
        <div class="h-48 md:h-96 flex flex-row space-x-4 px-6 md:px-24">
          <div class="basis-1/2 bg-transparent border-black">
            <img :src="photos[8]" alt="photo" class="w-full h-full object-cover"/>
          </div>
          <div class="basis-1/2 bg-transparent border-black">
            <img :src="photos[9]" alt="photo" class="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
    <div id="galerie-restaurant" v-if="!this.canShowPhotos">
      <p class="text-center font-light mb-10 mt-10 text-xl md:text-2xl lg:text-3xl md:mt-10 lg:mt-20" style="transition:all 1s ease-in-out">Nous mettons à jour notre <strong class="font-bold"> galerie de photo</strong> ! Revenez plus tard !</p>
    </div>
      <FooterSite/>
      <BackToPageTop/> 

  </template>
  
  <script>
  import HeaderSite from '../components/HeaderSite.vue'
  // import TemPhotos from '../components/TemPhotos.vue'
  import FooterSite from '@/components/FooterSite.vue'
  import BackToPageTop from '@/components/BackToPageTop.vue'
  // import http from "../http-common";

  export default {
      name: 'GaleriePhotos',
      components: {
        HeaderSite,
        // TemPhotos,
        FooterSite,
        BackToPageTop
      },
      data() {
      return {
        photos: [
          "https://drdh.fr/4I8A4026.jpg",
          "https://drdh.fr/4I8A4027.jpg",
          "https://drdh.fr/4I8A4029.jpg",
          "https://drdh.fr/4I8A4031.jpg",
          "https://drdh.fr/4I8A4032-1.jpg",
          "https://drdh.fr/4I8A4047.jpg",
          "https://drdh.fr/4I8A4055.jpg",
          "https://drdh.fr/4I8A4060.jpg",
          "https://drdh.fr/4I8A4074.jpg",
          "https://drdh.fr/4I8A4033.jpg"
        ],
        canShowPhotos: true,
      };
    },
    mounted() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }
  } 
</script>
  
  <style>
  @import '@/index.css';
  </style>
  