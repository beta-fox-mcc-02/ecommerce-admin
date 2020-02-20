<template>
  <div class="wrapper">
    <OverlayLoader v-if="isLoading" />
      <h2>Add Product</h2>
      <br>
      <form>
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
            v-model="product.category_id"
            :items="categories"
            item-text="name"
            item-value="id"
            return-object
            :error-messages="categoryErrors"
            label="Category"
            required
            outlined
            @blur="$v.product.category_id.$touch()"
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
        </div>
        <div class="wrapper-product-image">
          <h3>Product Images </h3>
          <br>
          <v-row>
            <v-col md="3" :key="file.id" v-for="(file) in product.files">
              <v-file-input
                color="deep-purple accent-4"
                counter
                :clearable="clearable"
                label="File input"
                @change="previewImage($event, file.id)"
                placeholder="Select your files"
                prepend-icon="mdi-paperclip"
                outlined
                :show-size="1000"
              >
              </v-file-input>
              <div class="product-image-preview">
                <img class="preview-image" :id="`preview-image-${file.id}`"/>
                <v-btn v-if="product.files.length > 1" @click="deleteProductImage(file.id)"
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
        <v-btn :disabled="$v.$invalid" @click="saveProduct" class="mr-4" color="success">Save</v-btn>
      </form>
    </div>
</template>

<script>
import OverlayLoader from './OverlayLoader'
import { required, numeric } from 'vuelidate/lib/validators'
export default {
  name: 'ProductForm',
  components: {
    OverlayLoader
  },
  data: () => ({
    clearable: false,
    product: {
      name: '',
      price: '',
      stock: '',
      category_id: '',
      SKU: '',
      description: '',
      files: [
        {
          id: 0,
          file: {}
        }
      ]
    }
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
      category_id: {
        required
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
      this.product.files.forEach((f) => {
        if (f.id === id) {
          f.file = event
        }
      })
      reader.readAsDataURL(event)
    },
    addProductImage () {
      const sorted = this.product.files.sort((a, b) => a.id - b.id)
      const last = sorted[sorted.length - 1]
      this.product.files.push({
        id: last.id + 1,
        file: {}
      })
    },
    saveProduct () {
      console.log(this.product)
    },
    deleteProductImage (id) {
      this.product.files = this.product.files.filter((f) => f.id !== id)
    }
  },
  created () {
    this.$store.dispatch('fetchCategories')
  },
  computed: {
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
      if (!this.$v.product.category_id.$dirty) return errors
      !this.$v.product.category_id.required && errors.push('Category is required.')
      return errors
    },
    priceErrors () {
      const errors = []
      if (!this.$v.product.price.$dirty) return errors
      !this.$v.product.price.required && errors.push('Price is required.')
      !this.$v.product.price.numeric && errors.push('Price should not be decimal number.')
      !this.$v.product.price.greaterThanZero && errors.push('Price has to be greater than zero.')
      return errors
    },
    stockErrors () {
      const errors = []
      if (!this.$v.product.stock.$dirty) return errors
      !this.$v.product.stock.required && errors.push('Stock is required.')
      !this.$v.product.stock.numeric && errors.push('Stock should not be decimal number.')
      !this.$v.product.stock.greaterEqualThanZero && errors.push('Stock should not greater equal than zero.')
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
