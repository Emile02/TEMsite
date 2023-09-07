<template>
    <button class="w-full h-8 text-black bg-white flex justify-center items-center hover:bg-black hover:text-white" style="transition:all .5s ease-in-out" @click="scrollToTop">
        <i class="fas fa-arrow-up fa-lg fa-beat"></i>
        <h1 class="font-thin text-2xl pr-5 pl-5">Retour en haut de page</h1>
        <i class="fas fa-arrow-up fa-lg fa-beat"></i>
</button>
</template>

<script>

export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>