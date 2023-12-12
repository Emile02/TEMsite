<template>
  <div id="Carte & Menu">
    <HeaderSite/>
    <BackgroundAccueil/>
    <CarteMenu/>
    <NewsletterForm/>
    <FooterSite/>
    <BackToPageTop/>
    <!-- <LogoPartenaires/> -->
  </div>
</template>

<script>
import HeaderSite from '../components/HeaderSite.vue'
import BackgroundAccueil from '../components/BackgroundAccueil.vue'
import NewsletterForm from '@/components/NewsletterForm.vue'
// import LogoPartenaires from '@/components/LogoPartenaires.vue'
import FooterSite from '@/components/FooterSite.vue'
import BackToPageTop from '@/components/BackToPageTop.vue'
import CarteMenu from '@/components/CarteMenu.vue'

export default {
  name: 'CartesMenu',
  components: {
    HeaderSite,
    BackgroundAccueil,
    CarteMenu,
    NewsletterForm,
    // LogoPartenaires,
    FooterSite,
    BackToPageTop,
}
,
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
</style>
