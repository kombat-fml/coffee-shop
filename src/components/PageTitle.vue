<template>
  <h1 :class="className">{{ text }}</h1>
</template>
<script>
export default {
  props: {
    className: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
