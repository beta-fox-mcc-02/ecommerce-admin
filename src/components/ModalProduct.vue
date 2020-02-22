<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing class="float-left btn-add">Add New Product</b-button>
    <div>
      <b-modal id="modal-prevent-closing" ref="modal" title="Add New Product" @ok="handleOk">
        <div class="container alert alert-warning" role="alert" v-if="error">{{error}}</div>
        <b-form ref="form" @submit.prevent="handleSubmit">
          <b-form-group id="input-group-1" label="Product Name:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.name"
              type="text"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Url Image:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.image_url"
              required
              placeholder="Enter url image"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Price:" label-for="input-3">
            <b-form-input id="input-2" v-model="form.price" required placeholder="Enter price"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Stock:" label-for="input-4">
            <b-form-input id="input-2" v-model="form.stock" required placeholder="Enter stock"></b-form-input>
          </b-form-group>
        </b-form>
        <b-spinner label="Spinning" v-if="loading"></b-spinner>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalProduct',
  data() {
    return {
      form: {
        name: 'sala',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/41eJMQgmUrL.jpg',
        price: 25000,
        stock: 10,
      },
      modalShow: false,
      error: '',
      loading: false
    }
  },
  methods: {
    handleOk(bvModalEvt) {
      this.loading = true
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      let payload = this.form
      this.$store.dispatch('addProduct', payload)
        .then(() => {
          this.$store.dispatch('fetchProduct')
          this.error = ''
          this.$nextTick(() => {
            this.$bvModal.hide('modal-prevent-closing')
          })
          this.loading = false
        })
        .catch(err => {
          if (err.response.data.error) {
            this.error = err.response.data.error
          } else if (err.response.data.errors) {
            this.error = err.response.data.errors[0]
          }
        })
    }
  }
}

</script>

<style>
.btn-add {
  margin: 0px auto 20px 100px;
  color: #ffc312;
  font: bold;
}
</style>
