<template>
    <div id="app">
      <FormulaireReservation/>
    </div>
  </template>
  
  <script>
  import FormulaireReservation from '../components/FormulaireReservation.vue'

  
  export default {
    name: 'MenuSite',
    components: {
        FormulaireReservation
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