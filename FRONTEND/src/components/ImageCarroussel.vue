<template>
    <div class="w-full  bg-black h-[30rem] lg:h-[25rem] xl:h-[50rem]">
        <img class="w-full h-full object-cover" :src="currentImage" alt="Image 1">
    </div>
</template>

<script>
  export default {
    data() {
      return {
        currentIndex: 0,
        images: [
            "http://localhost:8080/4I8A4126.jpg",
            "http://localhost:8080/4I8A4115.jpg",
            "http://localhost:8080/4I8A4085.jpg",
            "http://localhost:8080/4I8A4033.jpg",
        // more images here ...
        ],
        currentUrl: window.location.href,
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
      setInterval(this.nextImage, 10000);
    },
  };
</script>