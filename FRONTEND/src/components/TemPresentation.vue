<template>
    <div class="mb-7 pt-10 md:pt-10 md:mt-10 md:mb-10 lg:mb-20 animate-fade" :class="{ 'active': isInViewport }">
        <h1 class="flex justify-center mt-10 text-xl font-bold md:text-2xl lg:text-3xl md:mt-10 lg:mt-20 xl:text-black" style="transition:all 1s ease-in-out">Restaurant Le TEM</h1>
        <h1 class="flex justify-center text-xl font-bold md:text-2xl lg:text-3xl" style="transition:all 1s ease-in-out">NANCY</h1>
        <h2 class="flex justify-center mt-4 text-xl font-thin uppercase text-yellow-800 md:text-2xl lg:text-3xl md:mt-6 lg:mt-10" style="transition:all 1s ease-in-out">Restaurant avec terrasse à nancy</h2>
        
        <p class="font-light pl-5 pr-5 mt-4 text-justify md:pl-10 md:pr-10 md:mt-5 lg:pr-20 lg:pl-20 lg:mt-10 xl:pr-48 xl:pl-48 2xl:pr-72 2xl:pl-72 2xl:text-lg 3xl:pr-[350px] 3xl:pl-[350px]">
          Le Tem est un <strong class="font-bold">restaurant semi-gastronomique</strong> situé au <strong class="font-bold">cœur de la Vieille Ville de Nancy</strong>, offrant une expérience culinaire de qualité. Nous mettons un point d'honneur à travailler avec des <strong class="font-bold">produits frais</strong> et des <strong class="font-bold">producteurs locaux</strong> pour garantir une qualité irréprochable à nos plats ! Notre équipe de cuisine allie <strong class="font-bold">savoir-faire</strong> et <strong class="font-bold">créativité</strong> pour vous faire découvrir de nouvelles saveurs et des dressages élaborés.
        </p>
        <p class="font-light pl-5 pr-5 mt-4 text-justify md:pl-10 md:pr-10 lg:pr-20 lg:pl-20 lg:mt-8 xl:pr-48 xl:pl-48 2xl:pr-72 2xl:pl-72 2xl:text-lg 3xl:pr-[350px] 3xl:pl-[350px]">
          Dans une <strong class="font-bold">ambiance conviviale</strong>, Le Tem est l'endroit idéal pour des <strong class="font-bold">déjeuners d'affaires</strong>, des <strong class="font-bold">dîners romantiques</strong>, des <strong class="font-bold">anniversaires</strong> ou des <strong class="font-bold">pots de thèse</strong>. Nous privatisons le restaurant pour votre événement !
        </p>
        <div class="flex align-items mt-10 pl-5 md:pl-10 lg:pl-20 xl:pl-48 2xl:pl-72 3xl:pl-[350px]">
            <img src="../../public/LOGO_NOIR.svg" all="LOGO COMPLET LE TEM" class="h-full max-h-10 pr-2">
        <button class="w-48">
            <h1 class="text-lg -ml-4 font-light uppercase text-tem-yellow"><a href="https://drdh.fr/letem54/reserver-une-table" class="resa" data-replace="Réserver une table"><span>Réserver une table</span></a></h1>
        </button>
        </div>
    </div>
</template>

<style focus>

/* hover effect 1 */
/* a {
	color: #18272F;
  position: relative;
  text-decoration: none;
}

a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background-color: #2591ca;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
} */

/* hover effect 2 */

 a.resa {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

a.resa::before,
a.resa::after {
  content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
a.resa::before {
  background-color: #000000;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}
a.resa::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #000000;
}

a.resa:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
a.resa:hover::after {
  transform: translate3d(0, 0, 0);
}

a.resa span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

a.resa:hover span {
  transform: translate3d(-200%, 0, 0);
}

/* hover effect 3 */

/* a {
  box-shadow: inset 0 0 0 0 #54b3d6;
  color: #54b3d6;
	padding: 0 .25rem;
	margin: 0 -.25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}
a:hover {
  color: #fff;
  box-shadow: inset 200px 0 0 0 #54b3d6;;
} */

/* CSS pour l'animation */

.animate-fade {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.animate-fade.active {
  opacity: 1;
}


</style>

<script>
export default {
  data() {
    return {
      isInViewport: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Vérification initiale au chargement de la page
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const element = this.$el;
      if (this.isElementPartiallyInViewport(element)) {
        if (!this.isInViewport) {
          this.isInViewport = true;
        }
      } else {
        this.isInViewport = false; // Réinitialiser le suivi de visibilité lorsque le composant sort de la vue
      }
    },
    isElementPartiallyInViewport(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= windowHeight &&
        rect.left <= window.innerWidth
      );
    },
  },
};
</script>