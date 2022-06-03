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
  data() {
    return {
      links: {
        header: {
          id: 0,
          link: '/',
          icon: 'Logo.svg',
        },
        other: [
          {
            id: 1,
            text: 'Our coffee',
            link: '/our-coffee',
          },
          {
            id: 2,
            text: 'For your pleasure',
            link: '/goods',
          },
          {
            id: 3,
            text: 'Contact us',
            link: '/contacts',
          },
        ],
      },
    };
  },
};
</script>
