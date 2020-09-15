<template>
<div>
  <!-- {{items}} -->
  <h1>List All Product</h1>
    <div class="d-flex p-3 flex-wrap" v-for="product in items" :key="product.id">
      <div class="card m-3" style="width: 18rem;">
        <img v-bind:src="product.image_url" class="card-img-top" v-bind:alt="product.name">
        <div class="card-body">
          <h5 class="card-title">{{product.name}}</h5>
          <div class="d-flex justify-content-center m-4">

            <b-button :to="`/edit/${product.id}`" variant="success">Edit</b-button>
            <b-button @click="remove(product.id)" variant="danger">Delete</b-button>
          </div>
        </div>
      </div>

    </div>
</div>
</template>

<script>
export default {
  name: 'Products',
  methods: {
    fetchData () {
      this.$store.dispatch('fetchData')
        .then(items => {
          this.$store.commit('FETCH_DATA', items.data.data)
        })
        .catch(err => {
          this.$store.dispatch('error', err.msg)
          console.log(err)
        })
    },
    remove (id) {
      console.log('masuk id neyyyy', id)
      this.$store.dispatch('deleteData', id)
        .then(editData => {
          this.$router.push('/')
        })
        .catch(err => {
          this.$store.dispatch('error', err.msg)
        })
    }
  },
  created () {
    this.fetchData()
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  }
}
</script>

<style>

</style>
