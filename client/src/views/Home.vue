<template>
<div class="home">
  <div class="card mt-3">
    <h3>List Products</h3>
  <table class="table table-hover table-dark table-responsive">
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope="col">Category</th>
        <th scope="col">Image</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody style="overflow: auto; max-heigth: 500px;">
      <tr v-for="(watch, i) in products" :key="watch.id">
        <th>{{ i + 1}}</th>
        <td>{{ watch.name }}</td>
        <td>{{ watch.description }}</td>
        <td>Rp. {{ watch.price }},-</td>
        <td>{{ watch.stock }}</td>
        <td>{{ watch.Category.name }}</td>
        <td><img :src="watch.imageUrl" alt="watch" style="width: 100px;"></td>
        <td><i class="fas fa-edit" @click.prevent="toDetail(watch.id)"></i> | <i class="fas fa-trash-alt" @click="removeWatch(watch.id)"></i></td>
      </tr>
    </tbody>
  </table>
  </div>
  <router-view />
</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    removeWatch (id) {
      this.$store.dispatch('removeWatch', id)
    },
    toDetail (id) {
      this.$router.push(`/${id}`)
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.token) {
      next()
    } else {
      next('/login')
    }
  },
  created () {
    if (localStorage.token) {
      this.$store.dispatch('isLogin', true)
      this.$store.dispatch('fetchProducts')
    }
  }
}
</script>

<style>

</style>
