<template>
  <div class="wrapper">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
  },
};
</script>

<style></style>
