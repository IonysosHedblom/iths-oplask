<template>
  <form>
    <div class="search-input">
      <input v-model="inputData" type="text" placeholder="Search for image.." />
      <button @click.prevent="search"><i class="fas fa-search"></i></button>
    </div>
  </form>
</template>

<script>
import * as api from "@/api";
export default {
  name: "Search",
  props: {
    page: Number,
    resetPage: Function,
  },
  data: function () {
    return {
      inputData: "",
    };
  },
  methods: {
    async search() {
      this.resetPage();
      this.$root.images = [];
      const data = await api.getDataBySearch(this.inputData, this.page);
      this.$root.images.push(data.results);
      this.$emit("inputData", this.inputData);
    },
    images() {
      return this.$root.randomtest;
    },
  },
};
</script>

<style scoped>
.search-input {
  display: flex;
  justify-content: center;
}

form {
  margin: 35px auto;
  width: 600px;
}

input {
  color: #000;
  height: 50px;
  width: 300px;
  padding-left: 18px;
  border-radius: 5px 5px 5px 5px;
  outline: none;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  background-color: #fff;
  border: 2px solid rgb(151, 151, 151);
  font-size: 0.9rem;
}

button {
  height: 56px;
  padding: 0 43px;
  border-radius: 0px 5px 5px 0px;
  margin-left: -100px;
  color: #fff;
  background-color: #000000;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  border: none;
  outline: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.4s;
}

button:hover {
  transform: scale(1.2);
  background-color: rgb(204, 204, 204);
  color: black;
  border-radius: 20%;
}
</style>