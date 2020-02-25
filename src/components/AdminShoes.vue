<template>
  <div class="admin-shoes-container" justify="center" align="center">
      <v-dialog v-model="dialog2" max-width="600px" persistent>
          <v-card>
            <v-card-title>
              <span class="headline">Update Shoe</span>
            </v-card-title>
            <v-form
              @submit.prevent="updateShoe"
              ref="newShoeForm"
            >
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Product Name*"
                      type="text"
                      v-model="name"
                      :rules="nameRules"
                      required
                      dense
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      outlined
                      auto-grow
                      no-resize
                      name="input-7-4"
                      label="Description"
                      v-model="description"
                      dense
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Image Url"
                      type="text"
                      v-model="image_url"
                      required
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Price"
                      type="number"
                      v-model="price"
                      :rules="priceRules"
                      required
                      dense
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Stock"
                      type="number"
                      v-model="stock"
                      :rules="stockRules"
                      required
                      dense
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-autocomplete
                      :items="categoryItems"
                      label="Categories"
                      multiple
                      chips
                      dense
                      v-model="categories"
                      :rules="categoriesRules"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue accent-3" text type="button" @click="clearNewShoeForm">Clear</v-btn>
                <v-btn color="blue lighten-1" text type="button" @click="closeNewShoeDialog">Close</v-btn>
                <v-btn color="blue darken-2" text type="submit">Edit</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
        <v-snackbar
          v-model="snackbar"
          :timeout="timeout"
          top
        >
          {{ message }}
        </v-snackbar>

        <v-toolbar
          color="teal"
          dark
        >
          <v-toolbar-title>Shoe List</v-toolbar-title>

          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>

          <v-toolbar-items>
            <v-dialog v-model="dialog" max-width="600px" persistent>
              <template v-slot:activator="{ on }">
                <v-btn text dark v-on="on" type="button" @click="newShoeForm">
                  <v-icon dark left>mdi-plus</v-icon>
                  <span>Add Shoe</span>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Add New Shoe</span>
                </v-card-title>
                <v-form
                  @submit.prevent="addNewShoe"
                  ref="newShoeForm"
                >
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="Product Name*"
                          type="text"
                          v-model="name"
                          :rules="nameRules"
                          required
                          dense
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          outlined
                          auto-grow
                          no-resize
                          name="input-7-4"
                          label="Description"
                          v-model="description"
                          dense
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Image Url"
                          type="text"
                          v-model="image_url"
                          required
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Price"
                          type="number"
                          v-model="price"
                          :rules="priceRules"
                          required
                          dense
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Stock"
                          type="number"
                          v-model="stock"
                          :rules="stockRules"
                          required
                          dense
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-autocomplete
                          :items="categoryItems"
                          label="Categories"
                          multiple
                          chips
                          dense
                          v-model="categories"
                          :rules="categoriesRules"
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue accent-3" text type="button" @click="clearNewShoeForm">Clear</v-btn>
                    <v-btn color="blue lighten-1" text type="button" @click="closeNewShoeDialog">Close</v-btn>
                    <v-btn color="blue darken-2" text type="submit">Add</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-dialog>
          </v-toolbar-items>

          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>

          <v-text-field
            v-model="search"
            label="Search Shoe"
            prepend-inner-icon="search"
            solo-inverted
            hide-details
            cols="3"
          ></v-text-field>
        </v-toolbar>
      <v-row v-if="!shoes.length">
        <v-col>
          <h3>
            No shoe available. Add one by clicking button above.
          </h3>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col
          v-for="{id, name, description, image_url, price, stock, Categories} in shoes"
          :key="id"
          cols="12"
          sm="12"
          md="6"
          lg="3"
        >
          <v-card>
            <v-img
              :src="image_url"
              class="align-end"
              height="200"
            >
            </v-img>
            <v-card-title
              v-text="name"
              class="ma-3 pa-6"
            ></v-card-title>
            <v-card-text
              class="text--primary"
            >
              <div class="description">
                {{ description }}
              </div>
              <div class="price">
                Price: Rp. {{price}}
              </div>
              <div class="stocks">
                Stock: {{stock}}
              </div>
              <v-chip-group
                column
              >
                <v-chip
                  v-for="category in Categories"
                  :key="category.id"
                >
                  {{category.name}}
                </v-chip>
              </v-chip-group>
              <v-card-action>
                <v-btn icon @click="getProductToEdit(id)">
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-btn icon @click="deleteProduct(id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-card-action>
            </v-card-text>
            <v-card-action></v-card-action>
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      dialog: false,
      dialog2: false,
      snackbar: false,
      id: 0,
      name: '',
      nameRules: [
        v => !!v || 'Product name required'
      ],
      description: '',
      image_url: '',
      price: '',
      priceRules: [
        v => !!v || 'Product price required',
        v => (v && v > 0) || 'Product price must above 0'
      ],
      stock: '',
      stockRules: [
        v => !!v || 'Product stock required',
        v => (v && v > 0) || 'Product stock must above 0'
      ],
      categories: [],
      categoriesRules: [
        v => (v && v.length > 0) || 'Product category required'
      ]
    }
  },
  computed: {
    shoes () {
      return this.$store.state.products.filter((el) => {
        return el.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    },
    categoryItems () {
      const options = []
      this.$store.state.categories.forEach(el => {
        options.push(el.name)
      })
      return options
    },
    message () {
      return this.$store.state.message
    }
  },
  methods: {
    newShoeForm () {
      this.$refs.newShoeForm.reset()
      this.dialog = true
    },
    closeNewShoeDialog () {
      this.$refs.newShoeForm.reset()
      this.dialog = false
      this.dialog2 = false
    },
    clearNewShoeForm () {
      this.$refs.newShoeForm.reset()
    },
    addNewShoe () {
      if (this.$refs.newShoeForm.validate()) {
        this.$store.dispatch('submitNewShoe', {
          name: this.name,
          description: this.description,
          image_url: this.image_url,
          price: this.price,
          stock: this.stock,
          categories: this.categories
        })
          .then(({ data }) => {
            this.$store.dispatch('getAllShoes')
            this.$store.commit('setMessage', data.msg)
            this.dialog = false
            this.snackbar = true
          })
          .catch(err => {
            this.$store.commit('setMessage', err.response.data.msg)
            this.snackbar = true
          })
      }
    },
    getProductToEdit (id) {
      this.$store.dispatch('getOneShoe', id)
        .then(({ data }) => {
          this.id = data.data.id
          this.name = data.data.name
          this.description = data.data.description
          this.image_url = data.data.image_url
          this.price = data.data.price
          this.stock = data.data.stock
          const selected = []
          data.data.Categories.forEach(el => {
            selected.push(el.name)
          })
          this.categories = selected
          this.dialog2 = true
        })
    },
    updateShoe (id) {
      if (this.$refs.newShoeForm.validate()) {
        this.$store.dispatch('updateShoe', {
          id: this.id,
          name: this.name,
          description: this.description,
          image_url: this.image_url,
          price: this.price,
          stock: this.stock,
          categories: this.categories
        }, id)
          .then(({ data }) => {
            this.$store.dispatch('getAllShoes')
            this.$store.commit('setMessage', data.msg)
            this.dialog2 = false
            this.snackbar = true
          })
          .catch(err => {
            this.$store.commit('setMessage', err.response.data.msg)
            this.snackbar = true
          })
      }
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteShoe', id)
        .then(({ data }) => {
          this.$store.dispatch('getAllShoes')
          this.$store.commit('setMessage', data.msg)
          this.snackbar = true
        })
        .catch(err => {
          this.$store.commit('setMessage', err.response.data.msg)
          this.snackbar = true
        })
    }
  },
  created () {
    this.$store.dispatch('getAllShoes')
    this.$store.dispatch('getAllCategories')
  }
}
</script>
