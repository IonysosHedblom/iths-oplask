<template>
  <div class="menu">
    <nav v-if="this.$root.totalPages[0] > 0">
      <a @click="prev">
        <i class="fas fa-angle-left fa-10x"></i>
      </a>
      <p>{{ page }} of {{ totalPages }}</p>
      <a @click="next">
        <i class="fas fa-angle-right fa-10x"></i>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      if (this.page + 1 <= this.$root.totalPages[0]) {
        this.$root.page += 1;
      }
    },
    prev() {
      if (this.page - 1 >= 1) {
        this.$root.page -= 1;
      }
    },
  },

  computed: {
    totalPages() {
      return this.$root.totalPages[0];
    },
    page() {
      return this.$root.page;
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  width: 650px;
  cursor: pointer;
}

i {
  color: #fff;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}

i:hover {
  color: #000;
}

p {
  font-size: 50px;
}

.hide {
  display: none;
}
</style>