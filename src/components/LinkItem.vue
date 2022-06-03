<template>
  <li :class="className">
    <router-link :to="link">
      {{ text }}
      <slot />
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
  },
};
</script>
