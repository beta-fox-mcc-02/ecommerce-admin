<template>
  <v-row justify="center">
    <v-dialog
      persistent
      v-model="dialog"
      content-class ="height-100"
      max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ modalType === 'add' ? 'Add category' : 'Edit category' }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <Alert :errors="errors" />
            <v-row>
              <v-col cols="12">
                <v-text-field label="Name"
                  type="text"
                  v-model="name"
                  required
                  :error-messages="nameErrors"
                  @blur="$v.name.$touch()"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Path"
                  v-model="path" type="text"
                  required
                  :error-messages="pathErrors"
                  @blur="$v.path.$touch()"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*Path without ('/')</small>
        </v-card-text>
        <CircularLoading v-if="isLoading"/>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="!isLoading"
            color="blue darken-1"
            text
            @click="closeModal">Close</v-btn>
          <v-btn
            v-if="!isLoading"
            :disabled="$v.$invalid"
            color="success"
            text @click="saveCategory">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import CircularLoading from './CircularLoading'
import Alert from './Alert'
export default {
  name: 'CategoryModal',
  components: {
    CircularLoading,
    Alert
  },
  props: {
    isOpen: Boolean,
    modalType: String
  },
  data: () => ({
    name: '',
    path: '',
    dialog: false
  }),
  validations: {
    name: {
      required
    },
    path: {
      required
    }
  },
  watch: {
    isOpen (value) {
      this.dialog = value
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.category.isLoading
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    pathErrors () {
      const errors = []
      if (!this.$v.path.$dirty) return errors
      !this.$v.path.required && errors.push('Path is required.')
      return errors
    },
    errors () {
      return this.$store.state.category.errors
    }
  },
  methods: {
    closeModal () {
      this.name = ''
      this.path = ''
      this.$v.$reset()
      this.$emit('closeModalCategory', false)
    },
    saveCategory () {
      const category = {
        name: this.name,
        path: this.path
      }
      this.$store.dispatch('createCategory', category)
        .then(response => {
          this.$store.dispatch('fetchCategories')
          this.$store.commit('SET_LOADING', false)
          this.$store.commit('SET_ERRORS', [])
          this.name = ''
          this.path = ''
          this.$v.$reset()
          this.$emit('closeModalCategory', false)
        })
        .catch(err => {
          this.$store.commit('SET_LOADING', false)
          this.$store.commit('SET_ERRORS', err.body.errors)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.v-dialog--persistent {
  max-height: 100% !important;
}
</style>
