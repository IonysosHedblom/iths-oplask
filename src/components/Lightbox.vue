<template>
  <div class="lightbox" v-if="show" @click="hideLightbox">
    <a @click.stop="prev">
      <i
        :class="{ hide: !checkPrev() }"
        class="nav fas fa-angle-left fa-10x"
      ></i>
    </a>
    <div class="lightbox-image">
      <img :src="images[index].urls.full" alt="image" />
    </div>
    <a @click.stop="next">
      <i
        :class="{ hide: !checkNext() }"
        class="nav fas fa-angle-right fa-10x"
      ></i>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
  },
  data() {
    return {
      show: false,
      index: 0,
      // images: this.$root.images[0],
    };
  },
  methods: {
    showLightbox() {
      this.show = true;
    },
    hideLightbox() {
      this.show = false;
      this.index = 0;
    },
    checkNext() {
      return this.index + 1 < this.images.length;
    },
    checkPrev() {
      return this.index - 1 >= 0;
    },
    next() {
      if (this.checkNext()) {
        this.index += 1;
      }
    },
    prev() {
      if (this.checkPrev()) {
        this.index -= 1;
      }
    },
  },
};
</script>

<style scoped>
.nav {
  cursor: pointer;
  color: #fff;
  padding: 50px;
}

.lightbox {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
}

.lightbox img {
  width: 800px;
  height: auto;
  object-fit: cover;
}

.hide {
  display: none;
}
</style>