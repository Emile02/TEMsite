<template>
      <div class="flex flex-row mt-10 xl:flex-cols">
        <div class="mr-2 ml-2 md:mr-3 md:ml-6 relative w-1/2 h-[22rem] overflow-hidden flex justify-center items-center">
          <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 pointer-events-none">
            <span class="text-white text-xl lg:text-2xl xl:text-3xl font-bold text-center">Menu <br> du <br> <strong>Maraîcher</strong></span>
            <div :class="{'discover-menu-M': activeIndex1 !== 1, 'bg-black text-white': activeIndex1 === 1, 'bg-white mt-4': activeIndex1 != 1}" class="rounded-lg h-8 w-32 flex justify-center items-center" style="transition:all .5s ease-in-out">
              <span class="text-center">Découvrir</span>
            </div>
          </div>
        <img class="absolute top-0 left-0 w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105" @mouseenter="enlargeRectangle1(1)" @mouseleave="resetRectangles1" style="transition:all .5s ease-in-out" src="../../public/tem_devanture.jpg" alt="Image 1">
        </div>
        <div class="mr-2 ml-2 md:ml-3 md:mr-6 relative w-1/2 h-[22rem] overflow-hidden flex items-center justify-center">
          <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 pointer-events-none">
            <span class="text-white text-xl lg:text-2xl xl:text-3xl font-bold text-center">Menu <br> du <br> <strong>TEM</strong></span>
            <div :class="{'discover-menu-T': activeIndex2 !== 1, 'bg-black text-white': activeIndex2 === 1, 'bg-white mt-4': activeIndex2 != 1}" class="rounded-lg h-8 w-32 flex justify-center items-center" style="transition:all .5s ease-in-out">
              <span class="text-center">Découvrir</span>
            </div>
          </div>
        <img class="absolute top-0 left-0 w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105" @mouseenter="enlargeRectangle2(1)" @mouseleave="resetRectangles2" style="transition:all .5s ease-in-out" src="../../public/tem_devanture.jpg" alt="Image 2">
        </div>
    </div>
    <div class="w-full flex justify-center items-center mb-5">
      <div class="mt-5 md:mb-5 w-full relative md:ml-10 md:mr-10 md:w-11/12 lg:w-9/12 h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem] overflow-hidden">
          <div class="pl-2 mr-2 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 pointer-events-none">
            <span class="text-white text-xl lg:text-2xl xl:text-3xl font-bold text-center">Buffet de <strong>desserts</strong></span>
            <div :class="{'discover-dessert': activeIndex3 !== 1, 'bg-black text-white': activeIndex3 === 1, 'bg-white mt-4': activeIndex3 != 1}" class="rounded-lg h-8 w-32 flex justify-center items-center" style="transition:all .5s ease-in-out">
              <span class="text-center">Découvrir</span>
            </div>
          </div>
        <img class="absolute top-0 left-0 w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105" @mouseenter="enlargeRectangle3(1)" @mouseleave="resetRectangles3" style="transition:all .5s ease-in-out" src="../../public/tem_devanture.jpg" alt="Image 3">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex1: null,
        activeIndex2: null,
        activeIndex3: null,
      };
    },
    methods: {
      enlargeRectangle1(index1) {
        this.activeIndex1 = index1;
      },
      resetRectangles1() {
        this.activeIndex1 = null;
      },
      enlargeRectangle2(index2) {
        this.activeIndex2 = index2;
      },
      resetRectangles2() {
        this.activeIndex2 = null;
      },
      enlargeRectangle3(index3) {
        this.activeIndex3 = index3;
      },
      resetRectangles3() {
        this.activeIndex3 = null;
      },
    }
  };
  </script>
  