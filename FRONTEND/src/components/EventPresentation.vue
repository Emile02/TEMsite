<template>
  <div class="mb-5 md:mb-10 lg:mb-20">
        <h1 class="flex justify-center pt-10 mt-10 text-xl font-bold md:text-2xl lg:text-3xl md:mt-10 lg:mt-20" style="transition:all 1s ease-in-out">Restaurant Le TEM</h1>
        <h2 class="flex justify-center mt-4 text-xl font-thin uppercase text-yellow-800 md:text-2xl lg:text-3xl md:mt-6 lg:mt-10 mb-10 text-center" style="transition:all 1s ease-in-out">Un lieu aux multiples évènements</h2>
        <p class="font-light pl-5 pr-5 mt-4 text-justify md:pl-10 md:pr-10 md:mt-5 lg:pr-20 lg:pl-20 lg:mt-10 xl:pr-48 xl:pl-48 2xl:pr-72 2xl:pl-72 2xl:text-lg 3xl:pr-[350px] 3xl:pl-[350px]">
          Notre restaurant s’inscrit depuis son ouverture dans un accueil tout particulier aux <strong class="font-bold">cocktails dînatoire</strong> pour les <strong class="font-bold">pots de thèses</strong> célébrants les fins d’études des jeunes diplômés. Nous proposons une déclinaison totale de notre carte (en <strong class="font-bold">accord dans la saison</strong>, avec les produits frais que nous travaillons à l’année) en version individuelle ainsi que.
        </p>
        <p class="font-light pl-5 pr-5 mt-4 text-justify md:pl-10 md:pr-10 md:mt-5 lg:pr-20 lg:pl-20 lg:mt-10 xl:pr-48 xl:pl-48 2xl:pr-72 2xl:pl-72 2xl:text-lg 3xl:pr-[350px] 3xl:pl-[350px]">
        Nous <strong class="font-bold">élaborons ensemble</strong> un devis approprié à vos demande, selon vos doléances et votre jour de passage, une <strong class="font-bold">adaptation totale du menu</strong> est possible avec les produits de votre choix. Notre restaurant peux <strong class="font-bold">accueillir votre événement</strong> sur la <strong class="font-bold">totalité de services</strong>, en <strong class="font-bold">privatisation totale</strong> ou <strong class="font-bold">partielle</strong> de notre salle.
      </p>
        <div class="flex align-items mt-10 pl-5 md:pl-10 lg:pl-20 xl:pl-48 2xl:pl-72 3xl:pl-[350px]">
            <img src="../../public/LOGO_NOIR.svg" all="LOGO COMPLET LE TEM" class="h-full max-h-10 pr-2">
        <button class="w-48">
          <h1 class="text-lg font-light uppercase text-tem-yellow">
            <a href="https://drdh.fr/letem54/reserver-une-table" data-replace="Réserver pour votre évènement" class="event">
              <span>Réserver pour votre évènement</span>
            </a>
          </h1>

        </button>
      </div>
      <h2 class="flex justify-center mt-4 text-xl font-thin uppercase text-yellow-800 md:text-2xl lg:text-3xl md:mt-6 lg:mt-10 mb-10" style="transition:all 1s ease-in-out">DECOUVREZ NOS EVENEMENTS</h2>
      <div class="w-full md:h-[30rem] xl:h-[45rem] mb-10 flex flex-col md:flex-row md:space-x-4 px-4">
        <div class="h-[20rem] md:h-full w-full md:w-1/2 relative group mb-4 md:mb-0">
            <img src="https://drdh.fr/4I8A4039.jpg" alt="photo" class="md:opacity-75 hover:opacity-100 hover:cursor-pointer w-full h-full object-cover" style="transition:all 1s ease-in-out"/>
            <div class="absolute inset-x-0 top-4 md:group-hover:top-12 flex justify-center items-center flex-col opacity-100 text-white font-bold " style="transition:all 1s ease-in-out">
                <span class="border-2 w-[15.5rem] lg:w-[18rem] xl:w-[23rem] border-white"></span>
                <p class="text-xl uppercase lg:text-2xl xl:text-3xl">COCKTAILS DINATOIRE</p>
                <span class="border-2 w-[15.5rem] lg:w-[18rem] xl:w-[23rem] border-white"></span>
            </div>
        </div>
        <div class="h-[20rem] md:h-full w-full md:w-1/2 relative group mb-4 md:mb-0">
            <img src="https://drdh.fr/4I8A4126.jpg" alt="photo" class="md:opacity-75 hover:opacity-100 hover:cursor-pointer w-full h-full object-cover" style="transition:all 1s ease-in-out" />
            <div class="absolute inset-x-0 top-4 md:group-hover:top-12 flex justify-center items-center flex-col opacity-100 text-white font-bold" style="transition:all 1s ease-in-out">
                <span class="border-2 w-[12rem] lg:w-[13.5rem] xl:w-[17rem] border-white"></span>
                <p class="text-xl uppercase lg:text-2xl xl:text-3xl">POTS DE THÈSES</p>
                <span class="border-2 w-[12rem] lg:w-[13.5rem] xl:w-[17rem] border-white"></span>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      clickOnEvent: null,
    };
  },
  methods: {
    enlargeRectangle(index) {
      this.activeIndex = index;
    },
    resetRectangles() {
      this.activeIndex = null;
      this.clickOnEvent = null;
    },
    resetBlock1() {
      this.clickOnEvent = null;
    },
    resetBlock2() {
      this.clickOnEvent = null;
    },
    resetBlock3() {
      this.clickOnEvent = null;
    },
    showEvent(index) {
      if (this.clickOnEvent === index) {
        this.hideEvent();
      } else {
        this.clickOnEvent = index;
      }
    },
    hideEvent() {
      this.clickOnEvent = null;
    }
  }
};
</script>
