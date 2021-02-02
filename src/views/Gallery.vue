<template>
  <div class="home">
    <Grid />
    <Search />
    <Card />
  </div>
</template>

<script>
// @ is an alias to /src
import Grid from "@/components/Grid.vue";
import Search from "@/components/Search.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Gallery",
  components: {
    Grid,
    Search,
    Card,
  },
};
</script>
