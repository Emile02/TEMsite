<!-- GaleriesPhotos.vue -->
<template>
    <div id="resa-table">
      <HeaderSite/>
      <ResaTable/>
      <!-- <ImageCarroussel/> -->
      <FooterSite/>
      <BackToPageTop/> 
    </div>
  </template>
  
  <script>
  import HeaderSite from '../components/HeaderSite.vue'
  import ResaTable from '../components/ResaTable.vue'
  // import ImageCarroussel from '@/components/ImageCarroussel.vue'
  import FooterSite from '@/components/FooterSite.vue'
  import BackToPageTop from '@/components/BackToPageTop.vue'


  export default {
      name: 'ReserverUneTable',
      components: {
        HeaderSite,
        ResaTable,
        // ImageCarroussel,
        FooterSite,
        BackToPageTop
      },
  } 
</script>
  
  <style>
  @import '@/index.css';
  </style>
  