<template>
  <section class="grid-section">
    <Card
      class="grid-item"
      v-bind:image="image"
      v-for="(image, index) in images"
      :key="index"
      @click.native="changeRoute(index)"
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
  methods: {
    changeRoute(index) {
      this.$router.push(`/single/${index}`);
    },
  },
};
</script>

<style scoped>
.grid-section {
  display: grid;
  gap: 15px;
  grid-template-columns: 270px 270px 270px 270px;
  grid-auto-rows: 350px;
}

/* .grid-item {
  grid-column: span auto;
  grid-row: span auto;
  asd
} */
</style>