<template>
  <div class="home-page">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        class="image"
        caption="First slide"
        img-src="https://lh3.googleusercontent.com/proxy/ynldmsRvw1Us9IPneJExJ8yjep8g1Y-6cvTi0CcVHDhx7NiVy8RQ9iq4dQouj5-8snAh6QDcEceniWdm8Gv8QqriTt3Z4TNtOyiO7HqtTBLL1fp1bgPrhRq8N0qyAT_buQLAsioUYWGUbmifUG3rkYoO-GBaKI0W9X7NBCRl2g8Xd54I1wX5716oHt_CFiMIhPB-DTuLhoDZ6FlxHgUlQt7BaYVLwYmPZo777Q"
      ></b-carousel-slide>
      <b-carousel-slide
        class="image"
        caption="Second Slide"
        img-src="https://technologue.id/wp-content/uploads/2019/07/Redmi6a-1024x480.png"
      ></b-carousel-slide>
      <b-carousel-slide
        class="image"
        caption="Third Slide"
        img-src="https://picsum.photos/1024/480/?image=22"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
  height: 80vh;
}

.image {
  height: 70vh;
}
</style>
