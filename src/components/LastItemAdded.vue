<template>
<!-- <div> -->
  <table class="table table-muted">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope="col">ACTION</th>
      </tr>
    </thead>
    <tbody
        v-for="item in items"
      :key="item.id"
    >
    <tr
    >
      <th scope="row">{{item.id}}</th>
      <td>{{item.name}}</td>
      <td>{{item.price}}</td>
      <td>{{item.stock}}</td>
      <td>
        <button type="button" class="btn btn-success">EDIT</button> |
        <button type="button" class="btn btn-danger">DELETE</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>

// import Item from '../components/Item'

export default {
  name: 'LastItemAdded',
  methods: {
    fetch () {
      this.$store.dispatch('fetchData')
    }
  },
  created () {
    this.fetch()
  },
  computed: {
    items () {
      var itemsDisplay = this.$store.state.items.data.data
      return itemsDisplay.slice(itemsDisplay.length - 3, itemsDisplay.length)
    }
  }
}
</script>

<style>

</style>
