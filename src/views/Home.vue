<template>
  <div class="home">
    <Gallery />
    <Search />
    <Card />
  </div>
</template>

<script>
// @ is an alias to /src
import Gallery from "@/components/Gallery.vue";
import Search from "@/components/Search.vue";
import Card from "@/components/Gallery.vue";

export default {
  name: "Home",
  components: {
    Gallery,
    Search,
    Card,
  },
};
</script>
