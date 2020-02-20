<template>
  <v-row justify="center">
    <v-dialog v-model="isOpen" max-width="400">
      <Alert :errors="errors" />
      <v-card>
        <v-card-title class="headline">Delete confirmation</v-card-title>
        <v-card-text>Are you sure want to delete this data ?</v-card-text>
        <CircularLoading v-if="isLoading" />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="!isLoading" color="red darken-1" text @click="isOpen = false">Cancel</v-btn>
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
    deleteData () {
      switch (this.type) {
        case 'categories':
          this.$store.dispatch('deleteCategory', { id: this.id, type: this.type })
            .then(response => {
              this.$store.commit('SET_LOADING', false)
              this.$store.dispatch('fetchCategories')
              this.$store.commit('SET_ERRORS', [])
              this.isOpen = !this.isOpen
            })
            .catch(err => {
              this.$store.commit('SET_LOADING', false)
              this.$store.commit('SET_ERRORS', err.body.errors)
            })
          break
      }
    }
  },
  watch: {
    dialog (value) {
      this.isOpen = !this.isOpen
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.category.isLoading
    },
    errors () {
      return this.$store.state.category.errors
    }
  }
}
</script>
