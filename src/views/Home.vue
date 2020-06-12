<template>
  <div class="home">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <center>
    <img alt="Vue logo" src="https://optinmonster.com/wp-content/uploads/2018/05/ecommerce-lead-generation-tips-1.jpg" class="image-home"/>
    <HelloWorld msg="Welcome to your ecommerce admin app" />
    </center>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style>
  .image-home {
    margin: 8px;
  }
</style>
