<template>
  <div class="wrapper">
    <OverlayLoader v-if="isLoading || isLoadProduct" />
      <h2>{{ formName }}</h2>
      <br>
      <form @submit.prevent="saveProduct" enctype="application/x-www-form-urlencoded">
        <div class="wrapper-form">
          <Alert :errors="errors"/>
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
                :disabled="file.isLoading"
                :name="`image-product-${file.id}`"
                :show-size="1000"
              >
              </v-file-input>
              <div class="product-image-preview">
                 <v-progress-linear
                  indeterminate
                  color="teal"
                  v-if="file.isLoading"
                  class="mb-5"
                 ></v-progress-linear>
                 <div class="img-actions">
                  <img :src="file.url ? file.url : ''" class="preview-image" :id="`preview-image-${file.id}`"/>
                  <div class="button-actions">
                    <v-btn v-if="productImages.length > 1" @click="deleteProductImage(file)"
                      class="ma-2 btn-delete-product"
                      :disabled="file.isLoading"
                      outlined fab small color="red">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn v-if="currentPage === 'edit' && file.isReadyToUpload"
                      class="ma-2 btn-upload"
                      :disabled="file.isLoading"
                      @click="uploadImage(file)"
                      outlined fab small color="blue-grey">
                      <v-icon dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                  </div>
                 </div>
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
        <v-btn v-if="!isLoadingProductActions"
          :disabled="$v.$invalid ||
          productImages.filter((image) => image.isLoading).length > 0"
          class="mr-4"
          type="submit"
          color="success">Save</v-btn>
      </form>
    </div>
</template>

<script>
import OverlayLoader from './OverlayLoader'
import CircularLoading from './CircularLoading'
import Alert from './Alert'
import { required, numeric } from 'vuelidate/lib/validators'
// const initialProduct = {
//   name: '',
//   price: '',
//   stock: '',
//   category: {
//     id: ''
//   },
//   SKU: '',
//   description: '',
//   weight: '',
//   files: [
//     {
//       id: 0,
//       isLoading: false,
//       file: {}
//     }
//   ]
// }
export default {
  name: 'ProductForm',
  components: {
    Alert,
    OverlayLoader,
    CircularLoading
  },
  data: () => ({
    clearable: false,
    formName: '',
    currentPage: '',
    product: {},
    productImages: []
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
    uploadImage (file) {
      file.isLoading = true
      this.productImages = [...this.productImages]
      const formData = new FormData()
      formData.append('productImages', file.file)
      formData.append('product', JSON.stringify([this.product]))
      if (!file.url) {
        this.$store.dispatch('addProductImage', formData)
          .then(response => {
            file.isLoading = false
            file.isReadyToUpload = false
            this.initializeProduct(this.product.id, false)
          })
          .catch(err => {
            file.isLoading = false
            file.errors = err.body
            this.productImages = [...this.productImages]
          })
      } else {
        this.$store.dispatch('editProductImage', { id: file.id, formData })
          .then(response => {
            file.isLoading = false
            file.isReadyToUpload = false
            this.initializeProduct(this.product.id, false)
          })
          .catch(err => {
            file.isLoading = false
            file.errors = err.body
            this.productImages = [...this.productImages]
          })
      }
    },
    previewImage (event, id) {
      const reader = new FileReader()
      reader.onload = function () {
        var output = document.getElementById('preview-image-' + id)
        output.src = reader.result
      }
      this.productImages.forEach((f) => {
        if (f.id === id) {
          f.file = event
          if (this.currentPage === 'edit') {
            f.isReadyToUpload = true
          }
        }
      })
      this.productImages = [...this.productImages]
      reader.readAsDataURL(event)
    },
    addProductImage () {
      const sorted = this.productImages.sort((a, b) => a.id - b.id)
      const last = sorted[sorted.length - 1]
      const input = {
        id: last.id + 1,
        file: {},
        isLoading: false
      }
      this.productImages = [...this.productImages, input]
    },
    saveProduct () {
      const formData = new FormData()
      this.productImages.forEach((file, index) => {
        if (file.file) {
          formData.append('productImages', file.file)
        }
      })
      formData.append('name', this.product.name)
      formData.append('price', this.product.price)
      formData.append('stock', this.product.stock)
      formData.append('category_id', this.product.category.id)
      formData.append('SKU', this.product.SKU)
      formData.append('description', this.product.description)
      formData.append('weight', this.product.weight)
      this.$store.commit('SET_PRODUCT_LOADING', true)
      if (this.currentPage === 'add') {
        this.$store.dispatch('addProduct', formData)
          .then((response) => {
            this.$store.commit('SET_PRODUCT_LOADING', false)
            this.$store.commit('SET_PRODUCT_ERRORS', [])
            this.product = { ...this.initialProduct }
            this.productImages = [...this.initialProduct.files]
            this.$router.push('/products')
          })
          .catch(err => {
            this.$store.commit('SET_PRODUCT_LOADING', false)
            this.$store.commit('SET_PRODUCT_ERRORS', err.body.errors)
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            })
          })
      } else {
        this.$store.dispatch('editProduct', this.product)
          .then((response) => {
            this.$store.commit('SET_PRODUCT_LOADING', false)
            this.$store.commit('SET_PRODUCT_ERRORS', [])
            this.$router.push('/products')
            this.product = { ...this.initialProduct }
            this.productImages = [...this.initialProduct.files]
          })
          .catch(err => {
            this.$store.commit('SET_PRODUCT_LOADING', false)
            this.$store.commit('SET_PRODUCT_ERRORS', err.body.errors)
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            })
          })
      }
    },
    initializeProduct (id, all) {
      this.$store.dispatch('findOneProduct', id)
        .then(response => {
          const product = response.body.product
          if (all) {
            this.product = product
            this.product.category = product.Category
          }
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
    deleteProductImage (file) {
      if (!file.url) {
        this.productImages = this.productImages.filter((f) => f.id !== file.id)
      } else {
        file.isLoading = true
        this.productImages = [...this.productImages]
        this.$store.dispatch('deleteProductImage', file.id)
          .then(response => {
            file.isLoading = false
            this.initializeProduct(this.product.id, false)
          })
          .catch(err => {
            file.isLoading = false
            file.errors = err.body
            this.productImages = [...this.productImages]
          })
      }
    }
  },
  created () {
    this.$store.dispatch('fetchCategories')
    const path = this.$route.path
    if (path === '/products/add') {
      this.formName = 'Add Product'
      this.currentPage = 'add'
      this.product = { ...this.initialProduct }
      this.productImages = [...this.initialProduct.files]
    } else {
      this.formName = 'Edit Product'
      this.currentPage = 'edit'
      const id = this.$route.params.id
      this.initializeProduct(id, true)
    }
  },
  watch: {
    $route (to, from) {
      to = to.path
      if (to === '/products/add') {
        this.formName = 'Add Product'
        this.product = { ...this.initialProduct }
        this.productImages = [...this.initialProduct.files]
        this.currentPage = 'add'
      } else {
        this.formName = 'Edit Product'
        this.currentPage = 'edit'
      }
    }
  },
  computed: {
    initialProduct () {
      return this.$store.state.product.product
    },
    errors () {
      return this.$store.state.product.errors
    },
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
    display: flex;
    flex-direction: column;
    .img-actions {
      display: flex
    }
  }

  .preview-image {
    width: 200px;
  }
</style>
