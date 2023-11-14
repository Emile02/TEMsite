<!-- GaleriesPhotos.vue -->
<template>
    <div id="galerie-photos">
      <HeaderSite/>
      <TemPhotos/>
      <div class="space-y-4 pb-10">
        <div class="h-48 md:h-96 flex flex-row space-x-4 px-6 md:px-24">
          <div class="basis-1/2 bg-transparent border-2 border-black">
            <img :src="photos[0]" alt="photo" class="w-full h-full object-cover"/>
          </div>
          <div class="basis-1/2 bg-transparent border-2 border-black">
            <img :src="photos[1]" alt="photo" class="w-full h-full object-cover"/>
          </div>
        </div>
        <div class="h-48 md:h-96 flex flex-row space-x-4 px-6 md:px-24">
          <div class="basis-1/2 bg-transparent border-2 border-black">
            <img :src="photos[2]" alt="photo" class="w-full h-full object-cover"/>
          </div>
          <div class="basis-1/2 bg-transparent border-2 border-black">
            <img :src="photos[3]" alt="photo" class="w-full h-full object-cover"/>
          </div>
        </div>
        <div class="h-48 md:h-96 flex flex-row space-x-4 px-6 md:px-24">
          <div class="basis-1/2 md:basis-1/2 bg-transparent border-2 border-black">
            <img :src="photos[4]" alt="photo" class="w-full h-full object-cover"/>
          </div>
          <div class="basis-1/2 bg-transparent border-2 border-black">
            <img :src="photos[5]" alt="photo" class="w-full h-full object-cover"/>
          </div>
        </div>
        <div class="h-48 md:h-96 flex flex-row space-x-4 px-6 md:px-24">
          <div class="basis-1/2 bg-transparent border-2 border-black">
            <img :src="photos[6]" alt="photo" class="w-full h-full object-cover"/>
          </div>
          <div class="basis-1/2 bg-transparent border-2 border-black">
            <img :src="photos[7]" alt="photo" class="w-full h-full object-cover"/>
          </div>
        </div>b
        <div class="h-48 md:h-96 flex flex-row space-x-4 px-6 md:px-24">
          <div class="basis-1/2 bg-transparent border-2 border-black">
            <img :src="photos[8]" alt="photo" class="w-full h-full object-cover"/>
          </div>
          <div class="basis-1/2 bg-transparent border-2 border-black">
            <img :src="photos[9]" alt="photo" class="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
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
  