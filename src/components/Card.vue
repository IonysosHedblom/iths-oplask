<template>
  <div class="img-wrapper">
    <img v-bind:src="image.urls.small" />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: Object,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

img:hover {
  transform: scale(1.1);
}
</style>