<template>
  <div id="app">
    <HeaderSite/>
    <BackgroundAccueil/>
    <TemPresentation/>
    <ProduitPresentation/>
    <AccueilEvenement/>
    <!-- <MenuChoice/> -->
    <!-- <EventPresentation/> -->
    <ImageCarroussel/>
    <NewsletterForm/>
    <FooterSite/>
    <BackToPageTop/>
    <!-- <LogoPartenaires/> -->
  </div>
</template>

<script>
import HeaderSite from '../components/HeaderSite.vue'
import BackgroundAccueil from '../components/BackgroundAccueil.vue'
import TemPresentation from '../components/TemPresentation.vue'
import ProduitPresentation from '../components/ProduitPresentation.vue'
import AccueilEvenement from '@/components/AccueilEvenement.vue'
// import MenuChoice from '../components/MenuChoice.vue'
// import EventPresentation from '../components/EventPresentation.vue'
import ImageCarroussel from '../components/ImageCarroussel.vue'
import NewsletterForm from '@/components/NewsletterForm.vue'
// import LogoPartenaires from '@/components/LogoPartenaires.vue'
import FooterSite from '@/components/FooterSite.vue'
import BackToPageTop from '@/components/BackToPageTop.vue'

export default {
  name: 'AccueilSite',
  components: {
    HeaderSite,
    BackgroundAccueil,
    TemPresentation,
    ProduitPresentation,
    AccueilEvenement,
    // MenuChoice,
    // EventPresentation,
    ImageCarroussel,
    NewsletterForm,
    // LogoPartenaires,
    FooterSite,
    BackToPageTop
  },
      mounted() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }
}

</script>

<style>
@import '@/index.css';

/* Exemple d'animation */
.fade-in {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.fade-in.active {
  opacity: 1;
}

</style>
