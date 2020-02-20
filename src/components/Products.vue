<template>
  <!-- This card will be looped -->
        <div class="col-4 mb-4">
            <div class="card text-center">
              <img
                src="https://www.idwpublishing.com/wp-content/uploads/2018/10/aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8yNDAvNzQ0L29yaWdpbmFsL1NwaWRlcm1hbjAxX2N2ckEuanBn.jpeg"
                class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.price }}</p>
                <p class="card-text">{{ product.stock }}</p>
                <button class="btn btn-primary">Edit</button>
              </div>
            </div>
        </div>
        <!-- This card will be looped -->
</template>

<script>

export default {
  name: 'Product',
  props: ['product'],
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  }
}
</script>

<style>

</style>
