<template>
    <footer class="bg-gray-800 w-full h-fit flex flex-col items-center pb-5">
            <div class="pt-2 md:pt-5 flex flex-col items-center md:flex-row text-white">
                <div class="flex flex-col pb-2 md:pr-44">
                    <h1 class="underline underline-offset-8 mb-3 font-bold text-xl">Réserver & Offrir:</h1>
                    <button class="text-l hover:text-yellow-200 my-1" style="transition:all .2s ease-in-out">
                        <h1 @click="navigateToView('/letem54/reserver-une-table')"><i class="invisible">_</i>Réserver une table <i class="logo mx-2 fas fa-caret-right fa-lg"></i></h1>
                    </button>
                    <button class="text-l hover:text-yellow-200 mt-1" style="transition:all .2s ease-in-out">
                        <h1 @click="navigateToView('/letem54/offrir-un-bon-cadeau')">Offrir un bon cadeau<i class="logo mx-2 fas fa-caret-right fa-lg"></i></h1>
                    </button>
                </div>
                    <a href="https://drdh.fr/letem54/accueil" class="flex justify-center hover:scale-90" style="transition:all .5s ease-in-out">
                        <img src="../../public/LOGO_BLANC.svg" alt="logo" class="w-30 md:w-52 h-32 md:h-52">
                    </a>
                <div class="text-white flex flex-col items-center md:pl-44">
                        <h1 class="font-bold text-xl">Restaurant Le TEM</h1>
                        <a href="https://maps.app.goo.gl/tC83ytDFqjCsFo8z8" target="_blank"><h1 class="text-l underline">17 Grande Rue</h1></a>
                        <h1 class="text-l">54000 NANCY</h1>
                        <h1 class="text-l">+33 3 83 32 52 62</h1>
                    <div class="mt-3 flex flex-row">
                        <a href="callto:+33633295925" class="logo mx-2 fas fa-phone fa-lg"></a>
                        <a href="mailto:letem@gmail.com" class="logo mx-2 fas fa-envelope fa-lg"></a>
                        <a href="https://www.example.com/" class="logo mx-2 fab fa-facebook fa-lg"></a>
                        <a href="https://www.example.com/" class="logo mx-2 fab fa-tiktok fa-lg hover:color-blue"></a>
                    </div>
                </div>
            </div>
            <div class="pt-6 text-white flex flex-col items-center md:tracking-wide">
                <h1 >Horaires <b>d'accueil:</b></h1>
                <h1 >Toute la semaine de 12h à 14h et de 19h à 22h</h1>
            </div>
        <div class="w-full pt-6 flex flex-row items-center justify-center text-white pl-24 pr-24">
            <div class="flex flex-col md:flex-row md:tracking-wide items-center">
                <a href="https://drdh.fr/letem54/accueil">
                    <button>
                        <h1 @click="navigateToView('/letem54/accueil')" class="pb-1 mx-2 hover:text-yellow-200 md:tracking-wide">Accueil</h1>
                    </button>
                </a>
                    <span class="block md:w-0.5 md:h-5"></span>
                <a>
                    <button>
                        <h1 @click="navigateToView('/letem54/cartes-menu-restaurant-le-TEM')" class="pb-1 mx-2 hover:text-yellow-200 md:tracking-wide" style="transition:all .2s ease-in-out">Carte & Menus</h1>
                    </button>
                </a>
                    <span class="block md:w-0.5 md:h-5"></span>
                <a>
                <button>
                    <h1 @click="navigateToView('/letem54/evenements-restaurant-le-tem')" class="pb-1 mx-2 hover:text-yellow-200 md:tracking-wide" style="transition:all .2s ease-in-out">Evènements</h1>
                </button>
                </a>
                    <span class="block md:w-0.5 md:h-5"></span>
                <a>
                <button>
                    <h1 @click="navigateToView('/letem54/galerie-photos')" class="pb-1 mx-2 hover:text-yellow-200 md:tracking-wide" style="transition:all .2s ease-in-out">Galerie Photo</h1>
                </button>
                </a>
                    <span class="block md:w-0.5 md:h-5"></span>
                <a>
                <button>
                    <h1 @click="navigateToView('/letem54/acces-restaurant-le-tem-nancy')" class="pb-1 mx-2 hover:text-yellow-200 md:tracking-wide" style="transition:all .2s ease-in-out">Accès</h1>
                </button>
            </a>
            </div>
            </div>
            <span class="mt-5 block w-36 h-0.5"></span>
            <a href="https://www.linkedin.com/in/emile-corvini/" target="_blank"><h1 class="text-white md:tracking-wide">Website by <button class="pt-4 hover:text-white text-red-400 hover:font-bold" style="transition:all .2s ease-in-out">@EmileCorvini</button></h1></a>
    </footer>
</template>

<style>

.logo:hover {
    animation: fa-beat 0.5s infinite linear;
}

</style>

<script>
    export default {
        methods: {
            navigateToView(string) {
                this.$router.push(string);
            }
        }
    }

</script>