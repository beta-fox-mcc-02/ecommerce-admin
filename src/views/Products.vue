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
            <button @click="edit(product.id)" type="button" class="btn btn-success">Edit</button>
            <button @click="remove(product.id)" type="button" class="btn btn-danger">Delete</button>
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
    },
    edit (id) {
      console.log(id)
      this.$store.dispatch('fetchEditData', id)
      this.$router.push('/edit')
    },
    remove (id) {
      console.log('masuk id neyyyy', id)
      this.$store.dispatch('deleteData', id)
        .then(editData => {
          console.log('DELETE DATA!')
          console.log('berhasil edit iyey')
          this.$router.push('/')
        })
        .catch(err => {
          console.log('GAGAL NIIIIIH HUHU')
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
