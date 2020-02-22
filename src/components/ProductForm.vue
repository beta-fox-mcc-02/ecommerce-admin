<template>
  <div class="wrapper">
    <OverlayLoader v-if="isLoading || isLoadProduct" />
      <h2>{{ formName }}</h2>
      <br>
      <form @submit.prevent="saveProduct" enctype="multipart/form-data">
        <div class="wrapper-form">
          <v-text-field
            v-model="product.name"
            :error-messages="nameErrors"
            label="Name"
            required
            outlined
            @blur="$v.product.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="product.SKU"
            :error-messages="skuErrors"
            label="SKU"
            outlined
            required
            @blur="$v.product.SKU.$touch()"
          ></v-text-field>
          <v-textarea
            v-model="product.description"
            :error-messages="descriptionErrors"
            label="Description"
            required
            outlined
            @blur="$v.product.description.$touch()"
            auto-grow>
          </v-textarea>
          <v-select
            v-model="product.category"
            :items="categories"
            item-text="name"
            item-value="id"
            return-object
            :error-messages="categoryErrors"
            label="Category"
            required
            outlined
            @blur="$v.product.category.$touch()"
          ></v-select>
          <v-text-field
            v-model="product.price"
            :error-messages="priceErrors"
            label="Price"
            required
            outlined
            min="1"
            type="number"
            @blur="$v.product.price.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="product.stock"
            :error-messages="stockErrors"
            label="Stock"
            required
            outlined
            min="0"
            type="number"
            @input="$v.product.stock.$touch()"
            @blur="$v.product.stock.$touch()"
          ></v-text-field>
            <v-text-field
            v-model="product.weight"
            :error-messages="weightErrors"
            label="Weight"
            required
            outlined
            step="any"
            placeholder="measure in kilogram"
            type="number"
            @input="$v.product.weight.$touch()"
            @blur="$v.product.weight.$touch()"
          >
          </v-text-field>
        </div>
        <div class="wrapper-product-image">
          <h3>Product Images </h3>
          <br>
          <v-row>
            <v-col md="3" :key="file.id" v-for="(file) in productImages">
              <v-file-input
                color="deep-purple accent-4"
                counter
                accept="image/*"
                :clearable="clearable"
                label="File input"
                @change="previewImage($event, file.id)"
                placeholder="Select your files"
                prepend-icon="mdi-paperclip"
                outlined
                :name="`image-product-${file.id}`"
                :show-size="1000"
              >
              </v-file-input>
              <div class="product-image-preview">
                <img :src="file.url ? file.url : ''" class="preview-image" :id="`preview-image-${file.id}`"/>
                <v-btn v-if="productImages.length > 1" @click="deleteProductImage(file.id)"
                  class="ma-2 btn-delete-product"
                  outlined fab small color="red">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-btn @click="addProductImage"
              class="ma-2"
              outlined fab small color="indigo">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-row>
        </div>
        <CircularLoading v-if="isLoadingProductActions" />
        <v-btn v-if="!isLoadingProductActions" :disabled="$v.$invalid"
          class="mr-4"
          type="submit"
          color="success">Save</v-btn>
      </form>
    </div>
</template>

<script>
import OverlayLoader from './OverlayLoader'
import CircularLoading from './CircularLoading'
import { required, numeric } from 'vuelidate/lib/validators'
const initialProductState = {
  name: '',
  price: '',
  stock: '',
  category: {
    id: ''
  },
  SKU: '',
  description: '',
  weight: '',
  files: [
    {
      id: 0,
      file: {}
    }
  ]
}
export default {
  name: 'ProductForm',
  components: {
    OverlayLoader,
    CircularLoading
  },
  data: () => ({
    clearable: false,
    formName: '',
    currentPage: '',
    product: initialProductState,
    productImages: initialProductState.files
  }),
  validations: {
    product: {
      name: {
        required
      },
      SKU: {
        required
      },
      description: {
        required
      },
      category: {
        id: {
          required
        }
      },
      price: {
        required,
        numeric,
        greaterThanZero: (value) => {
          if (value <= 0) {
            return false
          }
          return true
        }
      },
      weight: {
        required,
        greaterThanZero: (value) => {
          if (value <= 0) {
            return false
          }
          return true
        }
      },
      stock: {
        required,
        numeric,
        greaterEqualThanZero: (value) => {
          if (value < 0) {
            return false
          }
          return true
        }
      }
    }
  },
  methods: {
    previewImage (event, id) {
      const reader = new FileReader()
      reader.onload = function () {
        var output = document.getElementById('preview-image-' + id)
        output.src = reader.result
      }
      this.productImages.forEach((f) => {
        if (f.id === id) {
          f.file = event
        }
      })
      reader.readAsDataURL(event)
    },
    addProductImage () {
      const sorted = this.productImages.sort((a, b) => a.id - b.id)
      const last = sorted[sorted.length - 1]
      const input = {
        id: last.id + 1,
        file: {}
      }
      this.productImages = [...this.productImages, input]
    },
    saveProduct () {
      const formData = new FormData()
      this.productImages.forEach((file, index) => {
        formData.append('productImages', file.file)
      })
      formData.append('product', JSON.stringify([this.product]))
      this.$store.commit('SET_PRODUCT_LOADING', true)
      if (this.currentPage === 'add') {
        this.$store.dispatch('addProduct', formData)
          .then((response) => {
            this.$store.commit('SET_PRODUCT_LOADING', false)
            this.$store.commit('SET_PRODUCT_ERRORS', [])
            this.$router.push('/products')
          })
          .catch(err => {
            this.$store.commit('SET_PRODUCT_LOADING', false)
            this.$store.commit('SET_PRODUCT_ERRORS', err)
          })
      } else {
        this.$store.dispatch('editProduct', { id: this.product.id, formData })
          .then((response) => {
            this.$store.commit('SET_PRODUCT_LOADING', false)
            this.$store.commit('SET_PRODUCT_ERRORS', [])
            this.$router.push('/products')
          })
          .catch(err => {
            this.$store.commit('SET_PRODUCT_LOADING', false)
            this.$store.commit('SET_PRODUCT_ERRORS', err)
          })
      }
    },
    initializeProduct (id) {
      this.$store.dispatch('findOneProduct', id)
        .then(response => {
          const product = response.body.product
          this.product = product
          this.product.category = product.Category
          this.productImages = [...product.ProductImages]
          if (!this.productImages.length) {
            this.productImages.push({
              id: 0,
              file: {}
            })
          }
          this.$store.commit('SET_LOAD_PRODUCT', false)
        })
        .catch(err => {
          this.$store.commit('SET_LOAD_PRODUCT', false)
          this.$store.commit('SET_PRODUCT_ERRORS', err.body.errors)
        })
    },
    deleteProductImage (id) {
      this.productImages = this.productImages.filter((f) => f.id !== id)
    }
  },
  created () {
    this.$store.dispatch('fetchCategories')
    const path = this.$route.path
    if (path === '/products/add') {
      this.formName = 'Add Product'
      this.currentPage = 'add'
    } else {
      this.formName = 'Edit Product'
      this.currentPage = 'edit'
      const id = this.$route.params.id
      this.initializeProduct(id)
    }
  },
  watch: {
    $route (to, from) {
      to = to.path
      if (to === '/products/add') {
        this.formName = 'Add Product'
        this.product = initialProductState
        this.currentPage = 'add'
      } else {
        this.formName = 'Edit Product'
        this.currentPage = 'edit'
      }
    }
  },
  computed: {
    isLoadProduct () {
      return this.$store.state.product.isLoadProduct
    },
    isLoadingProductActions () {
      return this.$store.state.product.isLoading
    },
    isLoading () {
      return this.$store.state.category.isLoading
    },
    categories () {
      return this.$store.state.category.categories
    },
    nameErrors () {
      const errors = []
      if (!this.$v.product.name.$dirty) return errors
      !this.$v.product.name.required && errors.push('Name is required.')
      return errors
    },
    skuErrors () {
      const errors = []
      if (!this.$v.product.SKU.$dirty) return errors
      !this.$v.product.SKU.required && errors.push('SKU is required.')
      return errors
    },
    descriptionErrors () {
      const errors = []
      if (!this.$v.product.description.$dirty) return errors
      !this.$v.product.description.required && errors.push('Description is required.')
      return errors
    },
    categoryErrors () {
      const errors = []
      if (!this.$v.product.category.id.$dirty) return errors
      !this.$v.product.category.id.required && errors.push('Category is required.')
      return errors
    },
    priceErrors () {
      const errors = []
      if (!this.$v.product.price.$dirty) return errors
      !this.$v.product.price.required && errors.push('Price is required.')
      !this.$v.product.price.greaterThanZero && errors.push('Price has to be greater than zero.')
      !this.$v.product.price.numeric && errors.push('Price should not be decimal number.')
      return errors
    },
    stockErrors () {
      const errors = []
      if (!this.$v.product.stock.$dirty) return errors
      !this.$v.product.stock.required && errors.push('Stock is required.')
      !this.$v.product.stock.greaterEqualThanZero && errors.push('Stock should not greater equal than zero.')
      !this.$v.product.stock.numeric && errors.push('Stock should not be decimal number.')
      return errors
    },
    weightErrors () {
      const errors = []
      if (!this.$v.product.weight.$dirty) return errors
      !this.$v.product.weight.required && errors.push('Weight is required.')
      !this.$v.product.weight.greaterThanZero && errors.push('Weight should not greater equal than zero.')
      return errors
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    padding-top: 1rem;
    padding-left: 1rem;

    &-form {
      width: 50%;
    }
  }

  .product-image-preview {
    position: relative;
  }

  .btn-delete-product {
    position: absolute;
    top: 0;
    right: 0;
  }

  .preview-image {
    width: 200px;
  }
</style>
