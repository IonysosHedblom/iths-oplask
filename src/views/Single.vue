<template>
  <div class="container">
    <Card v-bind:image="image" />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
  },
  computed: {
    image() {
      return this.$root.images[0][this.$route.params.index];
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1700px;
  width: 85%;
  margin: 0 auto;
}
</style>