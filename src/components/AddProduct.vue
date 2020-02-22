<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">Add Product</p>
    </div>
    <div class="card-content">
      <div class="content">
        <form v-on:submit.prevent="submitForm">
          <b-field label="Name">
            <b-input v-model="name"></b-input>
          </b-field>
          <label class="label">Image</label>
          <b-field class="file">
            <b-upload v-model="image">
              <a class="button is-primary">
                <b-icon icon="file"></b-icon>
                <span>Select image</span>
              </a>
            </b-upload>
            <span class="file-name" v-if="image">
              {{ image.name }}
            </span>
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
              <button class="button is-primary">Add Product</button>
              <button class="button">Cancel</button>
            </div>
          </section>
        </form>
      </div>
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="isLoading"
      :can-cancel="true"
    ></b-loading>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: null,
      image: null,
      stock: null,
      price: null,
      isLoading: false
    }
  },
  methods: {
    submitForm() {
      this.isLoading = true
      let formData = new FormData()
      formData.append('image', this.image)
      formData.append('name', this.name)
      formData.append('stock', this.stock)
      formData.append('price', this.price)

      this.$store
        .dispatch('addProduct', formData)
        .then(message => {
          this.isLoading = false
          this.$buefy.toast.open({
            message,
            type: 'is-success'
          })
          this.$router.push('/dashboard')
        })
        .catch(message => {
          this.isLoading = false
          this.$buefy.toast.open({
            message,
            type: 'is-danger'
          })
        })
    }
  }
}
</script>
