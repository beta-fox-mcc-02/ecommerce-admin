<template>
  <div class="home container">
    <div class="my-2 d-flex justify-end">
      <v-btn @click="toAddProduct" color="primary" dark>
        <v-icon left>mdi-plus-thick</v-icon>Add Produk
      </v-btn>
    </div>
    <v-card>
      <v-card-text>
        <!-- {{ products }} -->
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>Id</th>
                <th>Image Product</th>
                <th>Product Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>
                  {{ product.id }}
                </td>
                <td>
                  <!-- <v-avatar tile> -->
                    <img :src="product.image" width="150" alt="avatar" srcset="">
                  <!-- </v-avatar> -->
                </td>
                <td>
                  {{ product.name }}
                </td>
                <td>{{ product.stock }} pcs</td>
                <td>Rp {{ product.price }}</td>
                <td>{{ product.description }}</td>
                <td>
                  <!-- <v-icon class="pointer mx-1 hvr" small>mdi-pencil</v-icon> -->
                  <dialog-update class="my-2" :product="product"></dialog-update>
                  <dialog-delete class="my-2" :product="product"></dialog-delete>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import dialogDelete from '../components/PromptDelete'
import dialogUpdate from '../components/PromptUpdate'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    dialogDelete,
    dialogUpdate
  },
  methods: {
    toAddProduct () {
      const loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer
      })
      setTimeout(() => {
        loader.hide()
        this.$router.push('/addProduct')
      }, 1000)
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    headers () {
      const headers = []
      Object.keys(this.products[0]).forEach(product => {
        headers.push({
          text: (product.toLowerCase().split(' ').map((word) => (word.charAt(0).toUpperCase() + word.slice(1)))),
          value: product
        })
      })
      return headers
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
