<template>
  <div class="mb-5 md:mb-10 lg:mb-20">
        <h1 class="flex justify-center pt-10 mt-10 text-xl font-bold md:text-2xl lg:text-3xl md:mt-10 lg:mt-20" style="transition:all 1s ease-in-out">Restaurant Le TEM</h1>
        <h2 class="flex justify-center mt-4 text-xl font-thin uppercase text-yellow-800 md:text-2xl lg:text-3xl md:mt-6 lg:mt-10 mb-10" style="transition:all 1s ease-in-out">Cartes & Menus (Trouver un texte pour remplacer celui ci-dessous)</h2>
        <p class="font-light pl-5 pr-5 mt-4 text-justify md:pl-10 md:pr-10 md:mt-5 lg:pr-20 lg:pl-20 lg:mt-10 xl:pr-48 xl:pl-48 2xl:pr-72 2xl:pl-72 2xl:text-lg 3xl:pr-[350px] 3xl:pl-[350px]">
          Le Tem est un <strong class="font-bold">restaurant semi-gastronomique</strong> situé au <strong class="font-bold">cœur de la Vieille Ville de Nancy</strong>, offrant une expérience culinaire de qualité. Nous mettons un point d'honneur à travailler avec des <strong class="font-bold">produits frais</strong> et des <strong class="font-bold">producteurs locaux</strong> pour garantir une qualité irréprochable à nos plats ! Notre équipe de cuisine allie <strong class="font-bold">savoir-faire</strong> et <strong class="font-bold">créativité</strong> pour vous faire découvrir de nouvelles saveurs et des dressages élaborés.
        </p>
        <p class="font-light pl-5 pr-5 mt-4 text-justify md:pl-10 md:pr-10 lg:pr-20 lg:pl-20 lg:mt-8 xl:pr-48 xl:pl-48 2xl:pr-72 2xl:pl-72 2xl:text-lg 3xl:pr-[350px] 3xl:pl-[350px]">
          Dans une <strong class="font-bold">ambiance conviviale</strong>, Le Tem est l'endroit idéal pour des <strong class="font-bold">déjeuners d'affaires</strong>, des <strong class="font-bold">dîners romantiques</strong>, des <strong class="font-bold">anniversaires</strong> ou des <strong class="font-bold">pots de thèse</strong>. Nous privatisons le restaurant pour <strong class="font-bold">vos évènements</strong> !
        </p>
        <div class="flex align-items mt-10 pl-5 md:pl-10 lg:pl-20 xl:pl-48 2xl:pl-72 3xl:pl-[350px]">
            <img src="../../public/LOGO_NOIR.svg" all="LOGO COMPLET LE TEM" class="h-full max-h-10 pr-2">
        <button class="w-48">
            <h1 class="text-lg -ml-4 font-light uppercase text-tem-yellow"><a data-replace="Réserver une table" class="event mt-2 text-lg font-light uppercase"><span>Réserver une table</span></a></h1>
        </button>
        </div>
        <h2 class="flex justify-center mt-4 text-xl font-thin uppercase text-yellow-800 md:text-2xl lg:text-3xl md:mt-6 lg:mt-10 mb-10" style="transition:all 1s ease-in-out">DECOUVREZ NOS EVENEMENTS</h2>
    </div>
  <!-- <div class="pt-10 flex justify-center items-center relative">
  <div
      class="w-11/12 h-[25rem] mb-5 opacity-70 hover:opacity-100 bg-cover bg-center bg-[url('/public/carroussel1.jpeg')] flex flex-row"
      @mouseenter="enlargeRectangle(1)"
      @mouseleave="resetRectangles"
      style="transition:all 1s ease-in-out"
      >
  <div
      @click="showEvent(1)"
      :class="{'hidden pointer-events-none' : activeIndex !== 1}"
      :style="{ width: clickOnEvent === 1 ? '100%' : '33.3333%'}"
      class="relative flex justify-center items-center w-1/3 h-full blur-sm hover:blur-none bg-cover bg-center bg-[url('/public/carroussel2.jpeg')] hover:border-2 hover:border-black"
      @mouseleave="resetBlock1"
      style="transition:all .5s ease-in-out"
      >
      <div
        class="absolute">
      <h1 class="font-bold text-white text-3xl"
        :class="{'hidden' : activeIndex !== 1}"
        >EVENEMENTS 1
      </h1>
      </div>
    </div>
    <div
      @click="showEvent(2)"
      :class="{'hidden pointer-events-none' : activeIndex !== 1 }"
      :style="{ width: clickOnEvent === 2 ? '100%' : '33.3333%' }"
      class="relative flex justify-center items-center  w-1/3 h-full blur-sm hover:blur-none bg-cover bg-center bg-[url('/public/carroussel2.jpeg')]-200 hover:border-2 hover:border-black"
      @mouseleave="resetBlock2"
      style="transition:all .5s ease-in-out">
      <div
        class="absolute">
      <h1 class="font-bold text-white text-3xl"
        :class="{'hidden' : activeIndex !== 1}"
        >EVENEMENTS 2
      </h1>
      </div>
    </div>
    <div
      @click="showEvent(3)"
      :class="{'hidden pointer-events-none' : activeIndex !== 1 }"
      :style="{ width: clickOnEvent === 3 ? '100%' : '33.3333%' }"
      class="w-1/3 h-full blur-sm flex justify-center items-center hover:blur-none bg-cover bg-center bg-[url('/public/carroussel2.jpeg')] hover:border-2 hover:border-black"
      @mouseleave="resetBlock3"
      style="transition:all .5s ease-in-out">
      <div>
      <h1
        class="font-bold text-white text-3xl"
        :class="{'hidden' : activeIndex !== 1}"
        >EVENEMENTS 3
      </h1>
      </div>
    </div>
  </div>
  <div
    class="absolute"
    :class="{'hidden' : activeIndex === 1}">
    <h1 class="font-light tracking-widest text-white text-3xl">EVENEMENTS</h1>
  </div>
</div> -->
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
