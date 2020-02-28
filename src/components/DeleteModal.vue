<template>
  <v-row justify="center">
    <v-dialog v-model="isOpen" persistent max-width="600">
      <v-card>
        <v-card-title class="headline">Delete confirmation</v-card-title>
        <v-card-text>
          <Alert :errors="errors" />
          Are you sure want to delete this data ?
        </v-card-text>
        <CircularLoading v-if="isLoading" />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="!isLoading" color="red darken-1" text @click="closeModal">Cancel</v-btn>
          <v-btn v-if="!isLoading" color="green darken-1" text @click="deleteData">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import CircularLoading from './CircularLoading'
import Alert from './Alert'
export default {
  name: 'DeleteModal',
  components: {
    CircularLoading,
    Alert
  },
  props: {
    dialog: Boolean,
    id: Number,
    type: String
  },
  data: () => ({
    isOpen: false
  }),
  methods: {
    closeModal () {
      this.$store.commit('SET_ERRORS', [])
      this.$store.commit('SET_PRODUCT_ERRORS', [])
      this.$emit('closeModalDelete', false)
    },
    deleteData () {
      switch (this.type) {
        case 'categories':
          this.$store.dispatch('deleteCategory', { id: this.id, type: this.type })
            .then(response => {
              this.$store.commit('SET_LOADING_ACTIONS', false)
              this.$store.dispatch('fetchCategories')
              this.$store.commit('SET_ERRORS', [])
              this.$emit('closeModalDelete', false)
            })
            .catch(err => {
              this.$store.commit('SET_LOADING_ACTIONS', false)
              this.$store.commit('SET_ERRORS', err.body.errors)
            })
          break
        case 'products':
          this.$store.dispatch('deleteProduct', { id: this.id })
            .then(response => {
              this.$store.commit('SET_PRODUCT_LOADING', false)
              this.$store.dispatch('getProducts')
              this.$store.commit('SET_PRODUCT_ERRORS', [])
              this.$emit('closeModalDelete', false)
            })
            .catch(err => {
              this.$store.commit('SET_PRODUCT_LOADING', false)
              this.$store.commit('SET_PRODUCT_ERRORS', err.body)
            })
          break
      }
    }
  },
  watch: {
    dialog (value) {
      this.isOpen = value
    }
  },
  computed: {
    isLoading () {
      if (this.type === 'products') {
        return this.$store.state.product.isLoading
      }
      return this.$store.state.category.isLoadingAction
    },
    errors () {
      if (this.type === 'products') {
        return this.$store.state.product.errors
      }
      return this.$store.state.category.errors
    }
  }
}
</script>
