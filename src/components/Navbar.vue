<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
      <LinkItem :link="links.header.link" className="header__item">
        <img :src="require(`@/assets/logo/${links.header.icon}`)" :alt="links.header.icon" />
      </LinkItem>
      <LinkItem
        v-for="link in links.other"
        :key="link.id"
        className="header__item"
        :link="link.link"
        :text="link.text"
      />
    </ul>
  </header>
</template>
<script>
import LinkItem from '@/components/LinkItem';

export default {
  components: {
    LinkItem,
  },
  computed: {
    links() {
      return this.$store.getters['getHeaderLinks'];
    },
  },
};
</script>
