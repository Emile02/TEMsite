<template>
    <div class="w-full h-[50rem] bg-black">
        <img class="image-to-change w-full h-full object-cover" :src="currentImage" alt="Image 1">
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
            "http://localhost:8080/carroussel4.jpeg",
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
      setInterval(this.nextImage, 10000);
    },
  };
</script>