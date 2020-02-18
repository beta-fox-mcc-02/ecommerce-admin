<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">Products</p>
    </div>
    <div class="card-content">
      <div class="content">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image URL</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Surface Studio</td>
              <td><a href="#">show</a></td>
              <td>Rp.45.000.000</td>
              <td>4000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  created: function() {
    // panggil api
    this.$store
      .dispatch('getProducts')
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
