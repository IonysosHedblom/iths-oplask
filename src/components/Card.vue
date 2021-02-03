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
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.5);
}
</style>