<template>
  <form>
    <label for="search">Search for images...</label>
    <input name="search" v-model="inputData" type="text" />
    <button @click.prevent="search">CLICK</button>
  </form>
</template>

<script>
import * as api from "@/api";
export default {
  name: "Search",
  props: {
    page: Number,
  },
  data: function () {
    return {
      inputData: "",
    };
  },
  methods: {
    async search() {
      this.$root.images = [];
      const data = await api.getDataBySearch(this.inputData, this.page);
      this.$root.images.push(data.results);
      this.$emit("inputData", this.inputData);
    },
  },
};
</script>

<style scoped>
</style>