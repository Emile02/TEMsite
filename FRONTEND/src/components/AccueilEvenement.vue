<template>
    <div class="presentation flex flex-col md:flex-row-reverse mt-10">
      <div class="md:mb-10 lg:mb-20 -mt-4 md:mt-10 lg:mt-20 w-full md:w-1/2 lg:h-[45rem] mb-10">
          <div>
              <h1 class="pt-5 text-xl md:text-2xl  lg:pt-40 font-light text-center md:text-left uppercase pl-5 md:pl-10  text-black  2xl:pt-42">ORGANISATION D'EVENEMENTS</h1>
              <p class="pt-5 pl-5 md:pl-10 text-black font-light text-md text-justify pr-5 md:pr-28 tracking-widest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aspernatur voluptas <span class="font-bold">expedita dicta</span>, soluta repudiandae magnam beatae, iure magni cupiditate <span class="font-bold">suscipit</span> veritatis laboriosam asperiores qui exercitationem. Alias sequi itaque tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et temporibus enim provident quis quae aut, eum nostrum corporis magnam perspiciatis sed labore dolor sapiente necessitatibus non possimus harum <span class="font-bold">quaerat esse!</span></p>
              <div class="flex align-items mt-10 pl-5 md:pl-10 mb-2">
                  <img src="../../public/LOGO_NOIR.svg" alt="LOGO COMPLET LE TEM" class="h-full max-h-10">
                  <button>
                    <h1 class="text-lg pl-2 font-light uppercase text-tem-yellow"><a href="http://localhost:8080/letem54/evenements-restaurant-le-tem" data-replace="Nos Evènements" class="mt-2 text-lg font-light uppercase"><span>Nos Evènements</span></a></h1>
                  </button>
              </div>
          </div>
      </div>
      <div class="flex md:mt-[4.4rem] lg:mt-[8rem] md:w-2/3">
        <div class="w-1/12 h-80 md:h-[25rem] lg:h-[40rem] bg-white flex justify-center items-center">
          
        </div>
        <div class="w-10/12 h-80 md:h-[25rem] lg:h-[40rem] bg-red-200 mb-7">
            <img class="image-to-change w-full h-full object-cover" src="http://localhost:8080/4I8A4099.jpg" alt="Image 1">
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
  
<script>
  export default {
    data() {
      return {
        showImage2: false,
        clipPathStyle: "",
        currentIndex: 0,
      images: [
        "http://localhost:8080/4I8A4099.jpg",
        "http://localhost:8080/4I8A4077.jpg",
        "http://localhost:8080/4I8A4041.jpg",
        "http://localhost:8080/4I8A4081.jpg",
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