<template>
  <div class="wrapper">
    <Search @submit="search" />
    <button class="showFav-button" @click="toggleFavorites">SHOW FAVORITES</button>
    <Lightbox :images="images" ref="lightboxRef" />
    <ul v-if="!showFavorites">
      <li v-for="(image, index) in images" :key="index">
        <Card @click.native="callLightbox(index)" :image="image" />
      </li>
    </ul>
    <ul v-else>
      <li v-for="(image, index) in favorites" :key="index">
        <Card
          :cardIndex="index"
          @click.native="callLightbox(index)"
          :image="image"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Lightbox from "../components/Lightbox.vue";
import Search from "../components/Search.vue";

export default {
  data: function () {
    return {
      page: 1,
      inputData: "",
      showFavorites: false,
    };
  },
  computed: {
    images() {
      return this.$store.state.images[0];
    },
    favorites() {
      return this.$store.state.favorites;
    },
  },
  methods: {
     search() {
      // this.$root.images = [];
      const payload = {input:this.inputData , page:this.page}
      this.$store.dispatch('search', payload)
      // const data = await api.getDataBySearch(this.inputData, this.page);
      // this.$root.images.push(data.results);
    },

    callLightbox(index) {
      this.$refs.lightboxRef.index = index;
      this.$refs.lightboxRef.show = true;
    },
    toggleFavorites() {
      this.showFavorites = !this.showFavorites;
    },
    // async loadInitialImages() {
    //   const data = await api.getInitialImages();
    //   this.$root.images.push(data);
    // },
  },
  created() {
    this.$store.dispatch('loadInitialImages')
  },
  components: { Card, Search, Lightbox },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav {
  color: #000;
  cursor: pointer;
}
.showFav-button{
  background-color: black;
  color: white;
  border: 5px solid black;
  border-radius: 5px 5px 5px 5px;
  cursor: pointer;
  transition: 0.5s;
  outline: none;
  font-weight: bold;
}
.showFav-button:hover{
  color: rgb(0, 0, 0);
  background-color: rgb(204, 204, 204);
  border: 5px solid rgb(204, 204, 204);
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  

  
}

ul {
  display: grid;
  gap: 15px;
  grid-template-columns: 270px 270px 270px 270px;
  grid-auto-rows: 350px;
}
li {
  display: grid;
  list-style: none;
}
</style>