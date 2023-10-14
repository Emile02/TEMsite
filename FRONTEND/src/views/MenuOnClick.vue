<template>
    <div id="app">
        <HeaderMenuOnClick/>
    </div>
  </template>
  
  <script>
  import HeaderMenuOnClick from '../components/HeaderMenuOnClick.vue'

  
  export default {
    name: 'MenuSite',
    components: {
        HeaderMenuOnClick
    }
  }
  </script>
  
  <style>
  @import '@/index.css';
  </style>