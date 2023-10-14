<!-- GaleriesPhotos.vue -->
<template>
    <div id="galerie-photos">
      <HeaderSite/>
      <TemPhotos/>
      <div class="space-y-4 pb-10">
        <div class="h-48 md:h-96 flex flex-row space-x-4 px-6 md:px-24">
          <div class="basis-1/2 bg-blue-100">
            <img :src="photos[0]" alt="photo" class="w-full h-full object-cover"/>
          </div>
          <div class="basis-1/2 bg-blue-200">
            <img :src="photos[1]" alt="photo" class="w-full h-full object-cover"/>
          </div>
        </div>
        <div class="h-48 md:h-96 flex flex-row space-x-4 px-6 md:px-24">
          <div class="basis-1/2 bg-blue-300">
            <img :src="photos[2]" alt="photo" class="w-full h-full object-cover"/>
          </div>
          <div class="basis-1/2 bg-blue-400">
            <img :src="photos[3]" alt="photo" class="w-full h-full object-cover"/>
          </div>
        </div>
        <div class="h-48 md:h-96 flex flex-row space-x-4 px-6 md:px-24">
          <div class="basis-1/2 md:basis-1/2 bg-blue-400">
            <img :src="photos[4]" alt="photo" class="w-full h-full object-cover"/>
          </div>
          <div class="basis-1/2 bg-blue-500">
            <img :src="photos[5]" alt="photo" class="w-full h-full object-cover"/>
          </div>
        </div>
        <div class="h-48 md:h-96 flex flex-row space-x-4 px-6 md:px-24">
          <div class="basis-1/2 bg-blue-600">
            <img :src="photos[6]" alt="photo" class="w-full h-full object-cover"/>
          </div>
          <div class="basis-1/2 bg-blue-700">
            <img :src="photos[7]" alt="photo" class="w-full h-full object-cover"/>
          </div>
        </div>
        <div class="h-48 md:h-96 flex flex-row space-x-4 px-6 md:px-24">
          <div class="basis-1/2 bg-blue-800">
            <img :src="photos[8]" alt="photo" class="w-full h-full object-cover"/>
          </div>
          <div class="basis-1/2 bg-blue-900">
            <img :src="photos[9]" alt="photo" class="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
      <!-- <div class="flex flex-wrap px-6 space-x-2">
      <div class="w-1/2 md:w-1/3 h-48 md:h-96 bg-blue-100">01</div>
      <div class="w-1/2 md:w-1/3 h-48 md:h-96 bg-blue-200">02</div>
      <div class="w-1/2 md:w-1/3 h-48 md:h-96 bg-blue-400">03</div>
      <div class="w-1/2 md:w-1/3 h-48 md:h-96 bg-blue-600">04</div>
      <div class="w-1/2 md:w-1/3 h-48 md:h-96 bg-blue-800">05</div>
      <div class="w-1/2 md:w-1/3 h-48 md:h-96 bg-blue-900">06</div>
    </div> -->
      <FooterSite/>
      <BackToPageTop/> 
    </div>
  </template>
  
  <script>
  import HeaderSite from '../components/HeaderSite.vue'
  import TemPhotos from '../components/TemPhotos.vue'
  import FooterSite from '@/components/FooterSite.vue'
  import BackToPageTop from '@/components/BackToPageTop.vue'
  import http from "../http-common";

  export default {
      name: 'GaleriePhotos',
      components: {
        HeaderSite,
        TemPhotos,
        FooterSite,
        BackToPageTop
      },
      data() {
      return {
        photos: [],
      };
    },
    methods: {
      async getAllPhotos() {
        try {
          const response = await http.get("/photos");
          console.log("response.data", response.data);
          response.data.forEach(element => {
            this.photos.push("http://localhost:8080/" + element);
          });  
        } catch (error) {
          console.error('Error fetching photos:', error);
          throw new Error('Failed to fetch photos');
        }
      }
    },
    created() {
      this.getAllPhotos();
    },
  } 
</script>
  
  <style>
  @import '@/index.css';
  </style>
  