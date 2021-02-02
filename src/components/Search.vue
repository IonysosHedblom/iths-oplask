<template>
  <form>
    <label for="search">Search for images...</label>
    <input name="search" v-model="inputData" type="text" />
    <button @click.prevent="search()">CLICK</button>
  </form>
</template>

<script>
export default {
  name: "Search",
  data: function () {
    return {
      inputData: "",
    };
  },
  methods: {
    search() {
      this.$root.inputData = this.inputData;
      this.$root.getSearchData();
    },
  },
};
</script>

<style scoped>
</style>