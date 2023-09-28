<template>
    <div class="mt-64px lg:block lg:mt-0">
      <img class="w-full h-[35rem] lg:h-screen" :src="currentImage">
      <div class="bubbles-container">
        <div :class="{'bg-white': currentIndex === 0}" class="w-5 h-5 border-2 border-white rounded-full m-2 hover:bg-white"></div>
        <div :class="{'bg-white': currentIndex === 1}" class="w-5 h-5 border-2 border-white rounded-full m-2 hover:bg-white"></div>
        <div :class="{'bg-white': currentIndex === 2}" class="w-5 h-5 border-2 border-white rounded-full m-2 hover:bg-white"></div>
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      currentIndex: 0,
      images: [
            "http://localhost:8080/carroussel1.jpeg",
            "http://localhost:8080/carroussel2.jpeg",
            "http://localhost:8080/carroussel3.jpeg",
        // more images here ...
        ],
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
      prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    },
    created() {
      setInterval(this.nextImage, 3500);
    },
}

</script>

<style>

.bubbles-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>