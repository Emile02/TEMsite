<template>
    <div>
        
    </div>
</template>

<style>
.bg-image {
    background-image: url('../../public/background.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
}
</style>

<script>

export default {
    methods: {
    navigateToSecondView() {
      this.$router.push('/letem54/accueil');
    }
  }
}

</script>