<template>
    <div class="mb-5 md:mb-10 lg:mb-20">
        <h1 class="flex justify-center pt-10 mt-10 text-xl font-bold md:text-2xl lg:text-3xl md:mt-10 lg:mt-20" style="transition:all 1s ease-in-out">Restaurant Le TEM</h1>
        <h2 class="flex justify-center mt-4 text-xl font-thin uppercase text-yellow-800 md:text-2xl lg:text-3xl md:mt-6 lg:mt-10 mb-10" style="transition:all 1s ease-in-out">Cartes & Menus (Trouver un texte pour remplacer celui ci-dessous)</h2>
        <p class="font-light pl-5 pr-5 mt-4 text-justify md:pl-10 md:pr-10 md:mt-5 lg:pr-20 lg:pl-20 lg:mt-10 xl:pr-48 xl:pl-48 2xl:pr-72 2xl:pl-72 2xl:text-lg 3xl:pr-[350px] 3xl:pl-[350px]">
          Le Tem est un <strong class="font-bold">restaurant semi-gastronomique</strong> situé au <strong class="font-bold">cœur de la Vieille Ville de Nancy</strong>, offrant une expérience culinaire de qualité. Nous mettons un point d'honneur à travailler avec des <strong class="font-bold">produits frais</strong> et des <strong class="font-bold">producteurs locaux</strong> pour garantir une qualité irréprochable à nos plats ! Notre équipe de cuisine allie <strong class="font-bold">savoir-faire</strong> et <strong class="font-bold">créativité</strong> pour vous faire découvrir de nouvelles saveurs et des dressages élaborés.
        </p>
        <p class="font-light pl-5 pr-5 mt-4 text-justify md:pl-10 md:pr-10 lg:pr-20 lg:pl-20 lg:mt-8 xl:pr-48 xl:pl-48 2xl:pr-72 2xl:pl-72 2xl:text-lg 3xl:pr-[350px] 3xl:pl-[350px]">
          Dans une <strong class="font-bold">ambiance conviviale</strong>, Le Tem est l'endroit idéal pour des <strong class="font-bold">déjeuners d'affaires</strong>, des <strong class="font-bold">dîners romantiques</strong>, des <strong class="font-bold">anniversaires</strong> ou des <strong class="font-bold">pots de thèse</strong>. Nous privatisons le restaurant pour votre événement !
        </p>
        <div class="flex align-items mt-10 pl-5 md:pl-10 lg:pl-20 xl:pl-48 2xl:pl-72 3xl:pl-[350px]">
            <img src="../../public/LOGO_NOIR.svg" all="LOGO COMPLET LE TEM" class="h-full max-h-10 pr-2">
        <button class="w-48">
            <h1 class="text-lg -ml-4 font-light uppercase text-tem-yellow"><a data-replace="Réserver une table" class="mt-2 text-lg font-light uppercase"><span>Réserver une table</span></a></h1>
        </button>
        </div>
        <h2 class="flex justify-center mt-4 text-xl font-thin uppercase text-yellow-800 md:text-2xl lg:text-3xl md:mt-6 lg:mt-10 mb-10" style="transition:all 1s ease-in-out">DECOUVREZ NOS CARTES & MENUS</h2>
    </div>
    <div class="w-full h-[40rem] mb-10 flex flex-row px-24 space-x-4">
    <div class="h-full w-1/3 relative group">
        <img src="http://localhost:8080/4I8A4039.jpg" alt="photo" class="opacity-75 hover:opacity-100 hover:cursor-pointer w-full h-full object-cover" style="transition:all 1s ease-in-out"/>
        <div class="absolute inset-x-0 top-4 group-hover:top-12 flex justify-center items-center flex-col opacity-100 text-white font-bold" style="transition:all .5s ease-in-out">
            <span class="border-2 w-64 border-white"></span>
            <p class="text-xl uppercase md:text-2xl lg:text-3xl">MENU DU MIDI</p>
            <span class="border-2 w-64 border-white"></span>
        </div>
    </div>
    <div class="h-full w-1/3 relative group">
        <img src="http://localhost:8080/4I8A4126.jpg" alt="photo" class="opacity-75 hover:opacity-100 hover:cursor-pointer w-full h-full object-cover" style="transition:all 1s ease-in-out"/>
        <div class="absolute inset-x-0 bottom-4 group-hover:bottom-12 flex justify-center items-center flex-col opacity-100 text-white font-bold" style="transition:all .5s ease-in-out">
            <span class="border-2 w-[22rem] border-white"></span>
            <p class="text-xl uppercase md:text-2xl lg:text-3xl">TABLE DES DESSERTS</p>
            <span class="border-2 w-[22rem] border-white"></span>
        </div>
    </div>
    <div class="h-full w-1/3 relative group">
        <img src="http://localhost:8080/4I8A4081.JPEG" alt="photo" class="opacity-75 hover:opacity-100 hover:cursor-pointer w-full h-full object-cover" style="transition:all 1s ease-in-out"/>
        <div class="absolute inset-x-0 top-4 group-hover:top-12 flex justify-center flex-col items-center opacity-100 text-white font-bold" style="transition:all .5s ease-in-out">
            <span class="border-2 w-64 border-white"></span>
            <p class="text-xl uppercase md:text-2xl lg:text-3xl">MENU DU SOIR</p>
            <span class="border-2 w-64 border-white"></span>
        </div>
    </div>
</div>

</template>

<style>

/* a {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

a::before,
a::after {
 content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
a::before {
  background-color: #000000;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}
a::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #000000;
}

a:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
a:hover::after {
  transform: translate3d(0, 0, 0);
}

a span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

a:hover span {
  transform: translate3d(-200%, 0, 0);
} */

</style>