/* eslint-disable */
<template>
    <header class="bg-black fixed top-0 left-0 right-0 z-10 p-4 flex justify-between items-center z-20"
    :class="{'bg-black': currentUrl === 'http://localhost:8080/letem54/galerie-photos' || currentUrl === 'http://localhost:8080/letem54/reserver-une-table' || currentUrl === 'http://localhost:8080/letem54/offrir-un-bon-cadeau' || currentUrl === 'http://localhost:8080/letem54/acces-restaurant-le-tem-nancy' || isLogoHidden, 'lg:bg-transparent' : !isLogoHidden && currentUrl !== 'http://localhost:8080/letem54/galerie-photos' && currentUrl !== 'http://localhost:8080/letem54/reserver-une-table' && currentUrl !== 'http://localhost:8080/letem54/offrir-un-bon-cadeau' && currentUrl !== 'http://localhost:8080/letem54/acces-restaurant-le-tem-nancy'}" style="transition:all .5s ease-in-out">
            <button @click="navigateToView('/letem54/menu')" class="flex items-center menu-bar">
              <span class="grid grid-rows-3 gap-2.5 lg:gap-3">
                <span class="block w-10 h-0.5"></span>
                <span class="block w-10 h-0.5"></span>
                <span class="block w-10 h-0.5"></span>
              </span>
              <span class="menu-text text-white ml-2 hidden md:block">Menu</span>
            </button>
            <img src="../../public/LOGO_BLANC.svg" all="LOGO COMPLET LE TEM" id="logo1" class="max-h-10 md:hidden flex justify-center items-center">
      <img src="../../public/LOGO_BLANC_LETEM.svg" alt="LOGO  LE TEM" id="logo2"
        class="h-full max-h-10 hidden md:block" :class="{'lg:invisible' : !isLogoHidden && currentUrl !== 'http://localhost:8080/letem54/galerie-photos' && currentUrl !== 'http://localhost:8080/letem54/reserver-une-table' && currentUrl !== 'http://localhost:8080/letem54/offrir-un-bon-cadeau' && currentUrl !== 'http://localhost:8080/letem54/acces-restaurant-le-tem-nancy'}">
      <div class="flex">
        <button>
          <span @click="navigateToView('/letem54/reserver-une-table')" class="text-xl text-white font-light underline underline-offset-8 hover:text-yellow-200 mx-1 md:mx-3 lg:mx-5" style="transition:all .5s ease-in-out">Réserver</span>
        </button>
        <button>
          <span @click="navigateToView('/letem54/offrir-un-bon-cadeau')" class="text-xl text-white font-light underline underline-offset-8 hover:text-yellow-200 mx-1 md:mx-3 lg:mx-5"  style="transition:all .5s ease-in-out">Offrir</span>
        </button>
      </div>
      <img src="../../public/LOGO_BLANC.svg" all="LOGO COMPLET LE TEM" id="logo3"
        class="hidden h-48 absolute left-1/2 transform -translate-x-1/2 z-2"
        :class="{ 'lg:block': !isLogoHidden, 'invisible': currentUrl === 'http://localhost:8080/letem54/galerie-photos' || currentUrl === 'http://localhost:8080/letem54/reserver-une-table' || currentUrl === 'http://localhost:8080/letem54/offrir-un-bon-cadeau' || currentUrl === 'http://localhost:8080/letem54/acces-restaurant-le-tem-nancy'}"  style="bottom: -155px; transition:all .5s ease-in-out;">
    </header>
</template>

<style>

.block {
  background-color: white;
}

.menu-bar:hover .block {
  background-color: #F2D024;
  transition:all .5s ease-in-out;
}

.menu-bar:hover .menu-text {
  color: #F2D024;
  transition:all .5s ease-in-out;
}

</style>

<script>
export default {
  data() {
    return {
      isLogoHidden: false,
      currentUrl: window.location.href,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 500) {
        this.isLogoHidden = true; // Cacher le logo lorsque le défilement dépasse 500 pixels
      } else {
        this.isLogoHidden = false; // Afficher le logo lorsque le défilement est inférieur à 500 pixels
      }
    },
    navigateToView(string) {
      this.$router.push(string);
    },
  },
}
</script>