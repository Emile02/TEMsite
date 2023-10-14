<template>
  <div class="flex justify-center items-center relative">
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
