<template>
  <div class="card-wrapper">
    <i
      @click.stop="addToFavorites(image)"
      :class="liked ? 'liked' : ''"
      class="icon-favorite fas fa-heart"
    ></i>
    <img class="image" :src="image.urls.small" />
    <div class="user">
      <a target="_blank" :href="image.user.portfolio_url">
        <img
          class="profile-picture"
          :src="image.user.profile_image.medium"
          alt=""
        />
      </a>
      <a target="_blank" :href="image.user.portfolio_url">{{
        image.user.username
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: Object,
    index: Number,
    id: String,
  },
  data() {
    return {
      liked: false,
    };
  },
  methods: {
    addToFavorites(image) {
      if (!this.$store.state.favorites.includes(image)) {
        console.log(image);
        this.liked = true;
        this.$store.dispatch("pushToFavorites", image);
      } else {
        this.liked = false;
        this.$store.dispatch("removeFromFavorites", this.index);
      }
    },
    // setClass(){
    //   if( this.$root.favorites.includes(this.image)){

    //   }
  },
};
</script>

<style scoped>
a {
  color: #fff;
  text-decoration: none;
}

.card-wrapper {
  display: flex;
  overflow: hidden;
}

.user,
.icon-favorite {
  position: absolute;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
}

.icon-favorite {
  display: none;
  justify-content: center;
  align-items: center;
  right: 5%;
  top: 5%;
  width: 35px;
  height: 25px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  color: rgb(170, 170, 170);
}

.icon-favorite:hover {
  color: #f54e42;
  cursor: pointer;
}
.liked {
  color: #f54e42;
}

.card-wrapper:hover {
  transform: scale(1.2);
  z-index: 999;
}

.user {
  display: none;
  align-items: center;
  align-self: flex-end;
  padding: 10px;
}

.profile-picture {
  border-radius: 100%;
  padding: 10px;
  width: 50px;
  height: 50px;
}

.card-wrapper:hover > .icon-favorite {
  display: flex;
}

.card-wrapper:hover > .user {
  display: flex;
}
</style>