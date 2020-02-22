<template>
  <div>
    <b-modal id="modal-edit" ref="modala" title="Product" @ok="handleOke">
      <div class="container alert alert-danger alt-modal" role="alert" v-if="error">{{error}}</div>
      <b-form ref="form" @submit.stop.prevent="formSubmit">
        <b-form-group id="input-group-1" label="Product Name:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            required
            placeholder="Enter name product"
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
</template>

<script>

export default {
  name: 'ModalEdit',
  props: {
    form: Object
  },
  data() {
    return {
      modalShow: false,
      error: '',
      loading: false
    }
  },
  methods: {
    handleOke(bvModalEvt) {
      this.loading = true
      bvModalEvt.preventDefault()
      this.formSubmit()
    },
    formSubmit() {
      let payload = {
        id: this.form.id,
        data: this.form
      }
      this.$store.dispatch('editProduct', payload)
        .then(() => {
          this.$store.dispatch('fetchProduct')
          this.error = ''
          this.loading = false
          this.$nextTick(() => {
            this.$bvModal.hide('modal-edit')
          })
        })
        .catch(err => {
          if (err.response.data.error) {
            this.error = err.response.data.error
          } else if (err.response.data.errors) {
            this.error = err.response.data.errors[0]
          }
          this.loading = false
        })
    }
  },
  created() {
    this.error = ''
  }
}
</script>

<style>
.alt-modal {
  margin: 0 auto;
}
</style>
