<template>
    <div>
        <header class="fixed top-0 left-0 right-0 z-10 bg-transparent p-4 flex justify-between items-center">
            <button @click="navigateToSecondView" class="flex items-center">
                <span class="grid grid-cols-2 gap-3">
                <span class="block w-10 h-0.5 bg-white transform rotate-45 -translate-x-1"></span>
                <span class="block w-10 h-0.5 bg-white transform -rotate-45 -translate-x-14"></span>
                </span>
                <span class="text-white -ml-11 mt-0.5 hidden md:block">Fermer</span>
            </button>
            <div>
                <button>
                    <span class="text-xl mx-4 text-white underline">Réserver</span>
                    <span class="text-xl mx-4 text-white underline">Offrir</span>
                </button>
            </div>
        </header>
        <div class="bg-image mt-64px lg:block lg:mt-0">
            <div class="container relative text-white uppercase font-serif font-semibold tracking-wide">
                <ul class="absolute top-1/2 transform translate-x-1/4 translate-y-3/4 md:translate-x-1/2 lg:my-24 lg:text-lg xl:text-xl 2xl:text-2xl  "
                    style="transition:all .5s ease-in-out">
                    <li class="mb-8">
                        <a href="#">Accueil</a>
                    </li>
                    <li class="mb-8">
                        <a href="#">Carte & Menu</a>
                    </li>
                    <li class="mb-8">
                        <a href="#">Notre Histoire</a>
                    </li>
                    <li class="mb-8">
                        <a href="#">Evénements</a>
                    </li>
                    <li>
                        <a href="#">Galerie photo</a>
                    </li>
                </ul>
            </div>
            <div class="relative h-screen">
                <img src="../../public/backjaune.jpeg" alt="Votre image" class="absolute top-1/2 left-1/2 transform translate-x-50% -translate-y-1/2 w-1/2 h-1/2 hidden lg:block">
            </div>
        </div>
    </div>
</template>

<style>
.bg-image {
    background-image: url('../../public/background.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
}
</style>

<script>

export default {
    methods: {
    navigateToSecondView() {
      this.$router.push('/letem54/accueil');
    }
  }
}

</script>