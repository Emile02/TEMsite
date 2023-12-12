<template>
    <div class="presentation flex flex-col md:flex-row-reverse mt-10">
      <div class="md:mb-10 lg:mb-20 -mt-4 md:mt-10 lg:mt-8 w-full md:w-1/2 lg:h-[45rem] mb-10 sm:bg-transparent ">
        <div class="">
            <h1 class="pt-5 text-xl md:text-2xl lg:pr-20 lg:pt-40 font-light uppercase pl-5 md:pl-10 lg:pl-20 text-black xl:pl-32 2xl:pl-60 2xl:pr-60 2xl:pt-42">Organisation d'Evenements</h1>
            <p class="pt-5 pl-5 md:pl-10 lg:pl-20 text-black text-justify pr-5 md:pr-10 lg:pr-20 xl:pl-32 xl:pr-32 2xl:pl-60 2xl:pr-60">Chez nous, la fraîcheur et la qualité des produits sont nos priorités. C'est pourquoi nous travaillons exclusivement avec des produits frais, de saison et provenant de producteurs locaux renommés. Nous sommes fiers de collaborer avec ces producteurs régionaux de confiance, tels que le maraîcher Haraux, le poulailler de Moulnot, Gourmet Food, la ferme de Crévic et la Maison Masse. Ces partenariats nous permettent de garantir des produits de la plus haute qualité à nos clients, tout en soutenant l'économie locale.</p>
            <div class="flex align-items mt-10 pl-5 md:pl-10 lg:pl-20 xl:pl-32 2xl:pl-60 mb-7">
                <img src="../../public/LOGO_NOIR.svg" alt="LOGO COMPLET LE TEM" class="h-full max-h-10">
                <button>
                  <h1 class="text-lg pl-2 font-light uppercase text-tem-yellow"><a href="https://drdh.fr/letem54/cartes-menu-restaurant-le-TEM" class="cartes" data-replace="Nos Cartes & Menus"><span>Nos Cartes & Menus</span></a></h1>
                </button>
            </div>
        </div>
    </div>
      <div class="flex md:mt-[4.4rem] lg:mt-[8rem] md:w-2/3">
        <div class="w-1/12 h-80 md:h-[25rem] lg:h-[40rem] bg-white flex justify-center items-center">
        </div>
        <div class="w-10/12 h-80 md:h-[25rem] lg:h-[40rem] bg-red-200 mb-7">
            <img class="image-to-change w-full h-full object-cover" src="https://drdh.fr/4I8A4099.jpg" alt="Image 1">
        </div>
      </div>
    </div>
</template>

<style>

a.event {
  overflow: hidden;
  position: relative;
  display: inline-block;
  white-space: nowrap;
}

a.event::before,
a.event::after {
  content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
a.event::before {
  background-color: #000000;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}
a.event::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #000000;
}

a.event:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
a.event:hover::after {
  transform: translate3d(0, 0, 0);
}

a.event span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

a.event:hover span {
  transform: translate3d(-200%, 0, 0);
}

</style>
  
<script>
  export default {
    data() {
      return {
        showImage2: false,
        clipPathStyle: "",
        currentIndex: 0,
      images: [
        "https://drdh.fr/4I8A4099.jpg",
        "https://drdh.fr/4I8A4077.jpg",
        "https://drdh.fr/4I8A4041.jpg",
        "https://drdh.fr/4I8A4081.jpg",
      ],
      clicked: false,
      };
    },   
    methods: {
      handleButtonMobileClick() {
        this.clicked = true;
      },
      handleMouseMove(event) {
        const mouseX = event.clientX;
        const offsetLeft = event.target.offsetLeft;
        const imageWidth = event.target.clientWidth;
        const percent = (mouseX - offsetLeft) / imageWidth;
        const clippedWidth = percent * 100;
  
        this.showImage2 = true;
        this.clipPathStyle = `inset(0 ${100 - clippedWidth}% 0 0)`;
      },
      reset() {
        this.showImage2 = false;
        this.clipPathStyle = "";
      },
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
      prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    },
    created() {
      setInterval(this.nextImage, 10000);
    },
    mounted() {
      document.querySelector(".click-to-right").addEventListener("click", () => {
        this.nextImage();
      });
      document.querySelector(".click-to-left").addEventListener("click", () => {
        this.prevImage();
      });
    },
  };
</script>