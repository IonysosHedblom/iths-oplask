<template>
  <div class="container">
    <router-link class="back-button" to="/">Back</router-link>
    <Card  v-bind:image="image" />
    
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
  zoom: 67%;
}

.back-button{
  text-decoration: none;
  font-size: 50px;
  cursor: pointer;
  transition: 0.4s;
  color: black;
}

.back-button:hover{
  text-shadow: 10px 10px 10px grey;
}

</style>