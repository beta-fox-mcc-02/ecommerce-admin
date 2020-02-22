<template>
  <div class="card bg-transparent my-2 mx-2 col-md-3">
    <img :src="watch.imageUrl" alt="watch" style="width: 100%">
    <div class="container">
      {{ watch.description }}
      <p>Rp. {{ watch.price }},- </p>
      <div class="button-group" v-if="isAdmin">
        <span class="mx-2"><i class="fa fa-pen"></i></span>
        <span class="mx-2 float-right"><i class="fa fa-trash"></i></span>
      </div>
      <div class="button-group" v-else>
        <span class="mx-2"><i class="fa fa-shopping-cart"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    watch: Object
  },
  computed: {
    isAdmin () {
      return this.$store.state.isAdmin
    }
  }
}
</script>

<style scoped>
.card {
  transition: 0.3s;
  width: 20%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.9);
  cursor: pointer;
}

p {
  color: orange;
  font-size: 15px;
}
p,
.container {
  line-height: normal;
  font-weight: 700;
}
.container {
  padding: 2px 16px;
  font-size: 80%;
  font-weight: 500;
}
</style>
