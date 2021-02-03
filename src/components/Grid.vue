<template>
  <section class="grid-section">
    <Card
      class="grid-item"
      v-bind:image="image"
      v-for="(image, index) in images"
      :key="index"
    />
  </section>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Grid",
  components: {
    Card,
  },
  props: {
    images: Array,
  },
};
</script>

<style scoped>
.grid-section {
  width: 70%;
  display: grid;
  grid-column-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
}

/* .grid-item {
  grid-column: span auto;
  grid-row: span auto;
} */
</style>