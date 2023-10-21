<!-- GaleriesPhotos.vue -->
<template>
    <div id="restau-acces">
      <HeaderSite/>
      <TemPresentation/>
      <MapTem/>
      <!-- <FooterSite/>
      <BackToPageTop/> -->
      
    </div>
  </template>
  
  <script>
  import HeaderSite from '../components/HeaderSite.vue'
  import TemPresentation from '../components/TemPresentation.vue'
  import MapTem from "@/components/MapTem.vue";
  // import FooterSite from '@/components/FooterSite.vue'
  // import BackToPageTop from '@/components/BackToPageTop.vue'


  export default {
      name: 'RestaurantAcces',
      components: {
        HeaderSite,
        TemPresentation,
        MapTem,
        // FooterSite,
        // BackToPageTop
      },
  } 
</script>
  
  <style>
  @import '@/index.css';
  </style>
  