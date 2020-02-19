<template>
  <div class="columns">
    <div class="column is-8">
      <div class="card">
        <div class="card-header">
          <p class="card-header-title">Update Product</p>
        </div>
        <div class="card-content">
          <div class="content">
            <form v-on:submit.prevent="submitForm">
              <b-field label="Name">
                <b-input v-model="name"></b-input>
              </b-field>
              <b-field label="Price">
                <b-input v-model="price"></b-input>
              </b-field>
              <b-field label="Stock">
                <b-numberinput v-model="stock"></b-numberinput>
              </b-field>

              <br />
              <section>
                <div class="buttons">
                  <button class="button is-primary">Update Product</button>
                  <button class="button">Cancel</button>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-4">
      <div class="card">
        <div class="card-header">
          <p class="card-header-title">Image</p>
        </div>
        <div class="card-content">
          <div class="content">
            <img src="https://i.imgur.com/xx5zJgf.jpg" />
            <button class="button is-primary is-fullwidth">Change Image</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdateProduct',
  data: function() {
    return {
      name: null,
      stock: null,
      price: null
    }
  },
  created: function() {
    // dispatch disini
    this.$store
      .dispatch('getProduct', this.$route.params.id)
      .then(product => {
        this.name = product.name,
        this.stock  = product.stock,
        this.price = product.price
      })
      .catch(() => {})
  }
}
</script>
