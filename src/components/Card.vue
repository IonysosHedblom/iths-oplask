<template>
  <div class="img-wrapper">
    <div class="icon">
    <i class="fas fa-heart"></i>
    </div>
    <img class="main-image" v-bind:src="image.urls.small" />
    <div class="user">
      <img :src="image.user.profile_image.large" alt="">
      <a target="_blank" :href="image.user.portfolio_url">{{image.user.username}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: Object,
  },
};
</script>

<style scoped>
.img-wrapper{
  position: relative;
}

.icon{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5%;
  top: 5%;
  z-index: 998;
  background-color: rgb(255, 255, 255);
  width: 35px;
  height: 25px;
  border-radius: 5px 5px 5px 5px;
  color:rgb(170, 170, 170);
}

.icon:hover{
  color:black;
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

.img-wrapper:hover {
  transform: scale(1.5);
  z-index: 999;
}

.user{  
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 5%;
  left: 5%;

}

.user > a{
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 1rem;
  margin-left: 10px;
}

.user > img{
border-radius: 100%;
object-fit: cover;
width: 35px;
height: 35px;

}

</style>