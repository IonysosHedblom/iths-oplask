<template>
  <div v-bind:class="[hover ? 'hover-wrapper' : 'image-wrapper']">
    <div class="icon">
      <i class="fas fa-heart"></i>
    </div>
    <img
      v-if="this.$route.path === '/'"
      class="main-image"
      v-bind:src="image.urls.small"
    />
    <img v-else class="large" v-bind:src="image.urls.full" />
    <div class="user">
      <img :src="image.user.profile_image.large" alt="" />
      <a target="_blank" :href="image.user.portfolio_url">{{
        image.user.username
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      hover: true,
    };
  },
  props: {
    image: Object,
  },
  mounted() {
    if (this.$route.path === "/" || this.$route.path === "/favorites") {
      this.hover = true;
    } else {
      this.hover = false;
    }
  },
};
</script>

<style scoped>
.hover-wrapper {
  position: relative;
}

.image-wrapper {
  position: relative;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5%;
  top: 5%;
  z-index: 998;
  background-color: rgb(255, 255, 255);
  border-radius: 5px 5px 5px 5px;
  color: rgb(170, 170, 170);
}

.hover-wrapper .icon {
  width: 35px;
  height: 25px;
}

.image-wrapper .icon {
  width: 50px;
  height: 40px;
}

.icon:hover {
  color: black;
  cursor: pointer;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;
}

.large {
  width: 100%;
  max-height: 1000px;
  object-fit: cover;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;
}

.hover-wrapper:hover {
  transform: scale(1.5);
  z-index: 999;
}

.user {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 5%;
  left: 5%;
}

.hover-wrapper .user > a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 1rem;
  margin-left: 10px;
}

.hover-wrapper .user > img {
  border-radius: 100%;
  object-fit: cover;
  width: 35px;
  height: 35px;
}

.image-wrapper .user > a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  margin-left: 10px;
}

.image-wrapper .user > img {
  border-radius: 100%;
  object-fit: cover;
  width: 50px;
  height: 50px;
}
</style>