<template>
    <div class="w-full  bg-black h-[20rem] lg:h-[35rem] xl:h-[50rem]">
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