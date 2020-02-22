<template>
  <div class="container">
    <b-table
      small
      :fields="fields"
      :items="products"
      responsive="sm"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <!-- A virtual column -->
      <template v-slot:cell(index)="data">{{ data.index + 1 }}</template>

      <!-- A virtual composite column -->
      <template v-slot:cell(image_url)="data" align-v="center">
        <b-img :src="data.value" alt="Right image" thumbnail fluid width="100px"></b-img>
      </template>

      <!-- A virtual composite column -->
      <template v-slot:cell(id)="data">
        <!-- <b-button v-b-modal.modal-edit>Open Modal</b-button> -->
        <b-button
          v-b-modal.modal-edit
          @click.prevent="updateProduct(data.value)"
          size="sm"
          variant="success"
          class="btn-table"
        >
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button
          v-b-modal.modal-1
          size="sm"
          variant="danger"
          @click.prevent="selectDelete(data.value)"
        >
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
      <!-- Optional default data cell scoped slot -->
      <template v-slot:cell()="data">
        <i>{{ data.value }}</i>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <b-modal id="modal-1" title="BootstrapVue" @ok="handleDelete">
      <b-spinner label="Spinning" v-if="loading"></b-spinner>
      <p class="my-4">Areyou sure to delete</p>
    </b-modal>
    <ModalEdit :form="form"></ModalEdit>
  </div>
</template>

<script>
import ModalEdit from '../components/ModalEdit'

export default {
  name: 'TableProduct',
  components: {
    ModalEdit
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      fields: [
        'index',
        { key: 'image_url', label: 'Image' },
        { key: 'name', label: 'Full Name', sortable: true },
        { key: 'price', sortable: true },
        { key: 'stock', sortable: true },
        { key: 'id', label: 'Action' }
      ],
      form: {},
      deleteId: Number,
      loading: false
    }
  },
  methods: {
    selectDelete(id) {
      this.deleteId = id
    },
    handleDelete(bvModalEvt) {
      this.loading = true
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.deleteProduct(this.deleteId)
    },
    deleteProduct(id) {
      this.$store.dispatch('deleteProduct', id)
        .then(() => {
          this.$store.dispatch('fetchProduct')
          this.$nextTick(() => {
            this.$bvModal.hide('modal-1')
          })
          this.loading = false
        })
        .catch(err => {
          if (err.response.data.error) {
            this.$store.commit('showError', err.response.data.error)
          } else if (err.response.data.errors) {
            this.$store.commit('showError', err.response.data.errors[0])
          }
          this.loading = false
        })
    },
    updateProduct(id) {
      let updated = this.products.filter(el => el.id === id)[0]
      this.form = updated
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    rows() {
      return this.products.length
    }
  },
  created() {
    this.$store.dispatch('fetchProduct')
  }
}
</script>

<style>
.btn-table {
  margin-right: 10px;
}
</style>
