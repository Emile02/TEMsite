<!-- GaleriesPhotos.vue -->
<template>
    <div id="resa-table">
      <HeaderSite/>
      <OffrirBon/>
      <FooterSite/>
      <BackToPageTop/> 
    </div>
  </template>
  
  <script>
  import HeaderSite from '../components/HeaderSite.vue'
  import OffrirBon from '../components/OffrirBon.vue'
  import FooterSite from '@/components/FooterSite.vue'
  import BackToPageTop from '@/components/BackToPageTop.vue'


  export default {
      name: 'ReserverUneTable',
      components: {
        HeaderSite,
        OffrirBon,
        FooterSite,
        BackToPageTop
      },
  } 
</script>
  
  <style>
  @import '@/index.css';
  </style>
  