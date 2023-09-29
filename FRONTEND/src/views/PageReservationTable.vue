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
    }
  }
  </script>
  
  <style>
  @import '@/index.css';
  </style>