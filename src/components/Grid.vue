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
  width: 100%;
  display: grid;
  gap: 15px;
  grid-template-columns: 200px 200px 200px 200px;
  grid-auto-rows: 250px;
}

/* .grid-item {
  grid-column: span auto;
  grid-row: span auto;
} */
</style>