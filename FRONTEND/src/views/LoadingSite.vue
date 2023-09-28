<template>
  <div class="flex items-center justify-center h-screen bg-white">
    <img src="/LOGO_NOIR.svg" alt="Loading" id="logo" class="w-screen h-1/2">
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { useRouter } from 'vue-router';

export default {
  mounted() {
    this.animateSVG();
  },

  methods: {
    animateSVG() {
      const router = useRouter();

      gsap.fromTo(
        '#logo',
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 5,
          ease: 'elastic',
          onComplete: () => {
            // Redirection vers la page d'accueil
            router.push('/letem54/accueil');
          },
        }
      );
    },
  },
};
</script>
