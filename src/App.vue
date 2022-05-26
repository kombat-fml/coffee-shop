<template>
  <div class="wrapper">
    <HeroView />
    <Footer />
  </div>
</template>

<script>
import HeroView from '@/views/HeroView.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    HeroView,
    Footer,
  },
};
</script>

<style></style>
