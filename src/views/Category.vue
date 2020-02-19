<template>
  <Fragment>
    <v-row v-if="isLoading"
          align="center"
          justify="center"
        >
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
        ></v-progress-circular>
    </v-row>
    <v-btn @click="openModal(0)" class="ma-2" tile outlined color="success">
      <v-icon left>mdi-plus</v-icon> Add Category
    </v-btn>
    <v-simple-table v-if="!isLoading" fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Path</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <td>{{ category.name }}</td>
            <td>{{ category.path }}</td>
            <td>
               <v-icon class="pointer color-blue">mdi-pencil</v-icon>
               <v-icon class="pointer color-red">mdi-delete</v-icon>
            </td>
          </tr>
          <tr v-if="!categories.length">
            <td colspan="3">Data is not found</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <CategoryModal />
  </Fragment>
</template>

<script>
import CategoryModal from '@/components/CategoryModal.vue'
import { Fragment } from 'vue-fragment'
export default {
  name: 'Category',
  components: {
    CategoryModal,
    Fragment
  },
  data: () => ({
    dialog: false,
    id: 0
  }),
  methods: {
    openModal (payload) {
      this.$store.dispatch('openModalCategory', payload)
    }
  },
  created () {
    this.$store.dispatch('fetchCategories')
  },
  computed: {
    categories () {
      return this.$store.state.category.categories
    },
    isLoading () {
      return this.$store.state.category.isLoading
    }
  }
}
</script>

<style lang="scss" scoped>
  .color-blue {
      color: #1867c0
  }
  .color-red {
      color: #F44336
  }
  .pointer {
    cursor: pointer;
  }
</style>
