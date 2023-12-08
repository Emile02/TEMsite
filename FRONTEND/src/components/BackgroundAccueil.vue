<template>
    <div class="mt-64px lg:block lg:mt-0">
      <img class="w-full h-[20rem] md:h-screen object-cover" :src="currentImage">
      <div class="bubbles-container hidden md:inline-flex">
        <div :class="{'bg-white': currentIndex === 0}" class="bubble w-5 h-5 border-2 border-white rounded-full m-2" @click="selectImage(0)"></div>
        <div :class="{'bg-white': currentIndex === 1}" class="bubble w-5 h-5 border-2 border-white rounded-full m-2" @click="selectImage(1)"></div>
        <div :class="{'bg-white': currentIndex === 2}" class="bubble w-5 h-5 border-2 border-white rounded-full m-2" @click="selectImage(2)"></div>
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      currentIndex: 0,
      interval: 3500,
      images: [
            "https://drdh.fr/4I8A4028.jpg",
            "https://drdh.fr/4I8A4054.jpg",
            "https://drdh.fr/4I8A4038.jpg",
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
    selectImage(index) {
      this.currentIndex = index;
    },
      },
    created() {
      setInterval(this.nextImage, this.interval);
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

.bubble {
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;
}

.bubble:hover {
  background-color: white;
  cursor: pointer;
}



</style>