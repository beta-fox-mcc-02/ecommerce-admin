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
                  <a @click="$router.push('/dashboard')" class="button"
                    >Cancel</a
                  >
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
            <img v-if="image" :src="new_image_url" />
            <img v-else :src="image_url" />

            <div class="buttons" v-if="!image">
              <b-field class="file">
                <b-upload v-model="image">
                  <a class="button is-primary">
                    <b-icon icon="file"></b-icon>
                    <span>Change Image</span>
                  </a>
                </b-upload>
                <span class="file-name" v-if="image">
                  {{ image.name }}
                </span>
              </b-field>
            </div>
            <div class="buttons" v-else>
              <button
                class="button is-primary is-fullwidth"
                @click="updateImage"
              >
                Change
              </button>
              <button class="button is-fullwidth" @click="cancel">
                Cancel
              </button>
            </div>
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
      price: null,
      image_url: null,
      image: null,
      new_image_url: null
    }
  },
  watch: {
    image: function(newImage) {
      if (newImage) {
        this.new_image_url = URL.createObjectURL(this.image)
      }
    }
  },
  created: function() {
    this.$store
      .dispatch('getProduct', this.$route.params.id)
      .then(product => {
        this.name = product.name
        this.stock = product.stock
        this.price = product.price
        this.image_url = product.image_url
        this.id = product.id
      })
      .catch(() => {
        this.$buefy.toast.open({
          message: `Error fetching data.`,
          type: 'is-danger'
        })
      })
  },
  methods: {
    submitForm: function() {
      const data = {
        name: this.name,
        stock: this.stock,
        price: this.price,
        image_url: this.image_url,
        id: this.id
      }
      this.$store
        .dispatch('updateProduct', data)
        .then(path => {
          this.$router.push(path)
          this.$buefy.toast.open({
            message: 'Product updated.',
            type: 'is-success'
          })
        })
        .catch(() => {
          this.$buefy.toast.open({
            message: `Error updating product.`,
            type: 'is-danger'
          })
        })
    },

    updateImage: function() {
      this.isLoading = true
      let formData = new FormData()
      formData.append('image', this.image)

      this.$store
        .dispatch('updateProductImage', { formData, id: this.id })
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
    },
    cancel: function() {
      this.image = null
    }
  }
}
</script>
