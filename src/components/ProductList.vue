<template>
  <Fragment>
    <OverlayLoader v-if="isLoadingProduct" />
    <v-simple-table v-if="!isLoadingProduct" fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">SKU</th>
              <th class="text-left">Category</th>
              <th class="text-left">Price</th>
              <th class="text-left">Stock</th>
              <th class="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.name }}</td>
              <td>{{ product.SKU }}</td>
              <td>{{ product.Category.name }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.stock }}</td>
              <td>
                <router-link style="margin-right: 10px;text-decoration:none;" :to="`/products/${product.id}`">
                  <v-icon class="pointer color-blue">
                    mdi-pencil
                  </v-icon>
                </router-link>
                <v-icon class="pointer color-red"
                  @click="openModalDelete(product.id, 'products')">
                  mdi-delete
                </v-icon>
              </td>
            </tr>
            <tr v-if="!products.length">
              <td colspan="6">Data is not found</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <DeleteModal
        @closeModalDelete="closeModalDelete"
        :id="id"
        :type="type"
        :dialog="dialog" />
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import OverlayLoader from './OverlayLoader'
import DeleteModal from './DeleteModal'
export default {
  name: 'ProductList',
  components: {
    DeleteModal,
    Fragment,
    OverlayLoader
  },
  data: () => ({
    id: 0,
    type: '',
    dialog: false
  }),
  methods: {
    closeModalDelete (payload) {
      this.dialog = payload
    },
    openModalDelete (id, type) {
      this.dialog = true
      this.id = id
      this.type = type
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  },
  computed: {
    isLoadingProduct () {
      return this.$store.state.product.isLoading
    },
    products () {
      return this.$store.state.product.products
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
