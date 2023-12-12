<template>
  <div id="Evenement">
    <HeaderSite/>
    <BackgroundAccueil/>
    <EventPresentation/>
    <NewsletterForm/>
    <FooterSite/>
    <BackToPageTop/>
    <!-- <LogoPartenaires/> -->
  </div>
</template>

<script>
import HeaderSite from '../components/HeaderSite.vue'
import BackgroundAccueil from '../components/BackgroundAccueil.vue'
import EventPresentation from '@/components/EventPresentation.vue'
import NewsletterForm from '@/components/NewsletterForm.vue'
// import LogoPartenaires from '@/components/LogoPartenaires.vue'
import FooterSite from '@/components/FooterSite.vue'
import BackToPageTop from '@/components/BackToPageTop.vue'

export default {
  name: 'EvenementPage',
  components: {
    HeaderSite,
    BackgroundAccueil,
    EventPresentation,
    NewsletterForm,
    // LogoPartenaires,
    FooterSite,
    BackToPageTop,
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
</style>
