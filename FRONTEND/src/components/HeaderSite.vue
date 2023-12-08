/* eslint-disable */
<template>
    <header class="bg-gray-800 fixed top-0 left-0 right-0 z-10 p-4 flex justify-between items-center"
    :class="{'bg-gray-800': currentUrl === 'https://drdh.fr/letem54/galerie-photos' || currentUrl === 'https://drdh.fr/letem54/reserver-une-table' || currentUrl === 'https://drdh.fr/letem54/offrir-un-bon-cadeau' || currentUrl === 'https://drdh.fr/letem54/acces-restaurant-le-tem-nancy' || isLogoHidden, 'lg:bg-transparent' : !isLogoHidden && currentUrl !== 'https://drdh.fr/letem54/galerie-photos' && currentUrl !== 'https://drdh.fr/letem54/reserver-une-table' && currentUrl !== 'https://drdh.fr/letem54/offrir-un-bon-cadeau' && currentUrl !== 'https://drdh.fr/letem54/acces-restaurant-le-tem-nancy'}" style="transition:all .5s ease-in-out">
            <button @click="showMenu()" id="showmenuslide" class="flex items-center menu-bar">
              <span class="grid grid-rows-3 gap-2.5 lg:gap-3">
                <span class="block w-10 h-0.5"></span>
                <span class="block w-10 h-0.5"></span>
                <span class="block w-10 h-0.5"></span>
              </span>
              <span class="menu-text text-white ml-2 hidden md:block">Menu</span>
            </button>
            <a href="https://drdh.fr/letem54/accueil" class="flex justify-center hover:scale-90" style="transition:all .5s ease-in-out">
              <img src="../../public/LOGO_BLANC_LETEM.svg" class="w-30 md:w-52 h-10" :class="{'lg:invisible' : !isLogoHidden && currentUrl !== 'https://drdh.fr/letem54/galerie-photos' && currentUrl !== 'https://drdh.fr/letem54/reserver-une-table' && currentUrl !== 'https://drdh.fr/letem54/offrir-un-bon-cadeau' && currentUrl !== 'https://drdh.fr/letem54/acces-restaurant-le-tem-nancy'}">
            </a>
      <div class="flex">
        <button>
          <span @click="navigateToView('/letem54/reserver-une-table')" class="text-xl text-white font-light underline underline-offset-8 hover:text-yellow-200 mx-1 md:mx-3 lg:mx-5" style="transition:all .5s ease-in-out">Réserver</span>
        </button>
        <button>
          <span @click="navigateToView('/letem54/offrir-un-bon-cadeau')" class="text-xl text-white font-light underline underline-offset-8 hover:text-yellow-200 mx-1 md:mx-3 lg:mx-5"  style="transition:all .5s ease-in-out">Offrir</span>
        </button>
      </div>
      <img src="../../public/LOGO_BLANC.svg" all="LOGO COMPLET LE TEM" id="logo3"
      class="hidden h-48 absolute left-1/2 transform -translate-x-1/2 z-2 hover:scale-90"
      :class="{ 'lg:block': !isLogoHidden, 'invisible': currentUrl === 'https://drdh.fr/letem54/galerie-photos' || currentUrl === 'https://drdh.fr/letem54/reserver-une-table' || currentUrl === 'https://drdh.fr/letem54/offrir-un-bon-cadeau' || currentUrl === 'https://drdh.fr/letem54/acces-restaurant-le-tem-nancy'}"  style="bottom: -155px; transition:all .5s ease-in-out;">
    </header>
    <div v-if="showmenu" class="menu-slide">
      <div class="z-20 fixed top-[72px] opacity-95 h-48 border-2 border-black w-full bg-white flex justify-center items-center">
        <ul class="flex flex-col md:flex-row space-x-8 text-xl font-bold">
          <button @click="navigateToView('/letem54/accueil')"><li>
            <h1 class="text-black hover:text-tem-yellow" :class="{'text-tem-yellow': currentUrl === 'https://drdh.fr/letem54/accueil'}">Accueil</h1>
          </li></button>
          <button @click="navigateToView('/letem54/cartes-menu-restaurant-le-TEM')"><li>
            <h1 class="text-black hover:text-tem-yellow" :class="{'text-tem-yellow': currentUrl === 'https://drdh.fr/letem54/cartes-menu-restaurant-le-TEM'}">Cartes & Menu</h1>
          </li></button>
          <button @click="navigateToView('/letem54/evenements-restaurant-le-tem')"><li>
            <h1 class="text-black hover:text-tem-yellow" :class="{'text-tem-yellow': currentUrl === 'https://drdh.fr/letem54/evenements-restaurant-le-tem'}">Evènements</h1>
          </li></button>
          <button @click="navigateToView('/letem54/galerie-photos')"><li>
            <h1 class="text-black hover:text-tem-yellow" :class="{'text-tem-yellow': currentUrl === 'https://drdh.fr/letem54/galerie-photos'}">Galerie Photos</h1>
          </li></button>
          <button @click="navigateToView('/letem54/acces-restaurant-le-tem-nancy')"><li>
            <h1 class="text-black hover:text-tem-yellow" :class="{'text-tem-yellow': currentUrl === 'https://drdh.fr/letem54/acces-restaurant-le-tem-nancy'}">Accès</h1>
          </li></button>
        </ul>
      </div>
    </div>
</template>

<style>
 /* #menu-slide :hover { transform: translate(100%,60%);} */

 #menu-slide :hover {
  background-color: black;
 }
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
      showmenu: false,
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
    showMenu() {
      this.showmenu = !this.showmenu;
    }
  },
}
</script>