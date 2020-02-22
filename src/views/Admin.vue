<template>
  <div>
    <Navbar></Navbar>
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab v-if="isMaster" title="Admin Management">
            <b-card-text>
              <div>
                <h1>List of Admins</h1>
                <b-button
                variant="info"
                @click.prevent="resetAll"
                class="flex"
                v-b-modal.modal-1>
                Register New Admin
                </b-button>
                <b-modal hide-footer id="modal-1" title="Register New Admin">
                  <b-form @submit.prevent="registerAdmin">
                    <div v-if="error" class="alert alert-danger">{{ error }}</div>
                    <label for="text-email">Email</label>
                    <b-input
                    autofocus
                    v-model="email"
                    type="email"
                    id="text-email"
                    aria-describedby="email-help-block">
                    </b-input>
                    <label for="text-password">Password</label>
                    <b-input
                    v-model="password"
                    type="password"
                    id="text-password"
                    aria-describedby="password-help-block">
                    </b-input>
                    <b-form-text id="password-help-block">
                      Password must be at least 6 characters long
                    </b-form-text>
                    <br>
                    <b-button type='submit' variant="secondary">
                      Register
                    </b-button>
                  </b-form>
                </b-modal>
                <b-table hover :items="listOfAdmins" :fields="fieldAdmins">
                  <template v-slot:cell(action)="data">
                    <b-button @click.prevent="clickDeleteAdmin(data.item.id)" variant="danger">
                      Delete
                    </b-button>
                  </template>
                </b-table>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab title="Product">
            <h1>Products</h1>
            <b-card-text>
              <!-- button add product -->
              <b-button
              variant="info"
              @click.prevent="resetAll"
              class="flex"
              v-b-modal.modal-2>
              Add New Product
              </b-button>
              <!-- modal -->
              <b-modal hide-footer id="modal-2" title="Create New Product">
                <b-form @submit.prevent="addProduct">
                  <div v-if="error" class="alert alert-danger">{{ error }}</div>
                  <label for="text-name">Name</label>
                  <b-input
                  autofocus
                  v-model="inputProduct.name"
                  type="text"
                  id="text-name"
                  aria-describedby="name-help-block">
                  </b-input>
                  <label for="text-image">Image url</label>
                  <b-input
                  v-model="inputProduct.image_url"
                  type="url"
                  id="text-image"
                  aria-describedby="image-help-block">
                  </b-input>
                  <label for="range-2">Price</label>
                  <b-input
                  required
                  v-model="inputProduct.price"
                  type="number"
                  id="text-number"
                  aria-describedby="number-help-block">
                  </b-input>
                  <b-form-input
                  id="range-2"
                  v-model="inputProduct.price"
                  type="range"
                  min="0"
                  max="50000000"
                  step="10000">
                  </b-form-input>
                  <label for="text-stock">Stock</label>
                  <b-input
                  required
                  v-model="inputProduct.stock"
                  type="number"
                  id="text-number"
                  aria-describedby="number-help-block">
                  </b-input>
                  <br>
                  <b-button type='submit' variant="secondary">
                    Add
                  </b-button>
                </b-form>
              </b-modal>
            </b-card-text>
            <div class="flex">
              <b-card
              header="Total Products"
              header-text-variant="white"
              header-tag="header"
              header-bg-variant="dark"
              style="max-width: 20rem; margin-bottom: 20px; width:300px">
                <b-card-text>
                  <div class="card-info">
                    {{ listOfProducts.length }}
                  </div>
                </b-card-text>
              </b-card>
            <b-card
              header="Most Expensive"
              header-text-variant="white"
              header-tag="header"
              header-bg-variant="dark"
              style="max-width: 20rem; margin-bottom: 20px; width:300px">
              <b-card-text>
                <div class="card-info">
                  {{ mostExpensive }}
                </div>
              </b-card-text>
            </b-card>
            </div>

            <b-row>
              <b-col lg="6" class="my-1">
                <b-form-group
                  label="Filter"
                  label-cols-sm="3"
                  label-align-sm="right"
                  label-size="sm"
                  label-for="filterInput"
                  class="mb-0"
                >
                  <b-input-group size="sm">
                    <b-form-input
                      v-model="filter"
                      type="search"
                      id="filterInput"
                      placeholder="Type to Search"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </b-col>
              <b-col lg="6" class="my-1">
              </b-col>

              <b-col lg="6" class="my-1">
                <b-form-group
                  label="Filter On"
                  label-cols-sm="3"
                  label-align-sm="right"
                  label-size="sm"
                  description="Leave all unchecked to filter on all data"
                  class="mb-0">
                  <b-form-checkbox-group v-model="filterOn" class="mt-1">
                    <b-form-checkbox value="name">Name</b-form-checkbox>
                    <b-form-checkbox value="price">Price</b-form-checkbox>
                    <b-form-checkbox value="stock">Stock</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
              </b-col>
              <b-col lg="6" class="my-1">
              </b-col>
              <b-col sm="5" md="6" class="my-1">
                <b-form-group
                  label="Per page"
                  label-cols-sm="6"
                  label-cols-md="4"
                  label-cols-lg="3"
                  label-align-sm="right"
                  label-size="sm"
                  label-for="perPageSelect"
                  class="mb-0"
                >
                  <b-form-select
                    v-model="perPage"
                    id="perPageSelect"
                    size="sm"
                    :options="pageOptions"
                  ></b-form-select>
                </b-form-group>
              </b-col>

              <b-col sm="7" md="6" class="my-1">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalRows"
                  :per-page="perPage"
                  align="fill"
                  size="sm"
                  class="my-0"
                ></b-pagination>
              </b-col>
            </b-row>
            <b-card-text>
              <b-table
              hover
              small
              stacked="md"
              :items="listOfProducts"
              :fields="fieldProducts"
              :filter="filter"
              :filterIncludedFields="filterOn"
              @filtered="onFiltered"
              :current-page="currentPage"
              :per-page="perPage">
                <template v-slot:cell(image_url)="data">
                  <img v-if="!data.item.image_url" src="https://static.thenounproject.com/png/340719-200.png" alt="">
                  <img v-if="data.item.image_url" v-bind:src="data.item.image_url" alt="">
                </template>
                <!-- disini Action -->
                <template v-slot:cell(action)="data">
                  <b-button
                  @click.prevent="clickDeleteProduct(data.item.id)"
                  variant="danger"
                  size="sm">
                    Delete
                  </b-button>
                  <b-button
                  size="sm"
                  @click="edit(data.item, data.index, $event.target)"
                  class="mr-1">
                    Edit
                  </b-button>
                </template>
                <!-- selesai -->
                <template v-slot:cell(price)="data">
                  Rp. {{ data.item.price.toLocaleString() }}
                </template>
              </b-table>
            <!-- inimodalmya -->
            <b-modal :id="editModal.id" title="Edit" hide-footer @hide="resetAll">
              <b-form @submit.prevent="editProduct(editModal.productId)">
                <div v-if="error" class="alert alert-danger">{{ error }}</div>
                <label for="text-name">Name</label>
                <b-input
                autofocus
                v-model="inputProduct.name"
                type="text"
                id="text-name"
                aria-describedby="name-help-block">
                </b-input>
                <label for="text-image">Image url</label>
                <b-input
                v-model="inputProduct.image_url"
                type="url"
                id="text-image"
                aria-describedby="image-help-block">
                </b-input>
                <label for="range-2">Price</label>
                <b-input
                v-model="inputProduct.price"
                type="number"
                id="text-number"
                aria-describedby="number-help-block">
                </b-input>
                <b-form-input
                id="range-2"
                v-model="inputProduct.price"
                type="range"
                min="0"
                max="50000000"
                step="10000">
                </b-form-input>
                <label for="text-stock">Stock</label>
                <b-input
                v-model="inputProduct.stock"
                type="number"
                id="text-number"
                aria-describedby="number-help-block">
                </b-input>
                <br>
                <b-button type='submit' variant="secondary">
                  Edit
                </b-button>
              </b-form>
            </b-modal>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import userAPI from '../API/userAPI';
import store from '../store/index';
import Navbar from '../components/AdminNav.vue';

export default {
  name: 'Admin',
  components: {
    Navbar,
  },
  computed: {
    isMaster() {
      return this.$store.state.isMaster;
    },
    listOfAdmins() {
      return this.$store.state.listOfAdmins;
    },
    error() {
      return this.$store.state.error;
    },
    listOfProducts() {
      return this.$store.state.listOfProducts;
    },
    mostExpensive() {
      return this.$store.getters.mostExpensive;
    },
  },
  data() {
    return {
      inputProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: '',
      },
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      filter: '',
      filterOn: [],
      buttons: [
        { caption: 'Available', state: false },
        { caption: 'Empty Stock', state: false },
      ],
      fieldAdmins: [
        {
          key: 'id',
          label: 'Id',
          sortable: true,
        },
        {
          key: 'email',
          label: 'Email',
          sortable: true,
        },
        {
          key: 'action',
        },
      ],
      fieldProducts: [
        {
          key: 'id',
          label: 'Id',
          sortable: true,
        },
        {
          key: 'image_url',
          label: '',
        },
        {
          key: 'name',
          label: 'Name',
          sortable: true,
        },
        {
          key: 'price',
          label: 'Price',
          sortable: true,
        },
        {
          key: 'stock',
          label: 'Stock',
          sortable: true,
        },
        {
          key: 'action',
        },
      ],
      email: '',
      password: '',
      editModal: {
        id: 'edit-modal',
        productId: '',
      },
    };
  },
  mounted() {
    this.totalRows = this.listOfProducts.length;
  },
  methods: {
    edit(item, index, button) {
      this.inputProduct.name = item.name;
      this.inputProduct.image_url = item.image_url;
      this.inputProduct.price = item.price;
      this.inputProduct.stock = item.stock;
      this.editModal.productId = item.id;
      this.$root.$emit('bv::show::modal', this.editModal.id, button);
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    resetAll() {
      this.resetError();
      this.resetInput();
    },
    resetError() {
      this.$store.commit('setError', '');
    },
    resetInput() {
      this.email = '';
      this.password = '';
      this.inputProduct.name = '';
      this.inputProduct.image_url = '';
      this.inputProduct.price = '';
      this.inputProduct.stock = '';
      this.editModal.productId = '';
    },
    clickDeleteAdmin(id) {
      this.$bvModal.msgBoxConfirm('Are you sure?')
        .then((value) => {
          if (value) {
            this.$store.dispatch('deletePerson', id)
              .then(() => {
                // show success alert
                this.$store.commit('showAlert', {
                  successMessage: 'Successfully Deleted',
                  interval: 2000,
                });
                this.$store.dispatch('fetchListOfAdmins');
              })
              .catch((err) => {
                console.log(err.response);
              })
              .finally(() => {
                store.commit('stopLoading');
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    registerAdmin() {
      this.resetError();
      const data = {
        email: this.email,
        password: this.password,
        user_role: 'admin',
      };
      this.$store.dispatch('registerUser', data)
        .then(() => {
          // hide modal
          this.$bvModal.hide('modal-1');
          // show success alert
          this.$store.commit('showAlert', {
            successMessage: 'Successfully Registered',
            interval: 2000,
          });
          this.$store.dispatch('fetchListOfAdmins');
        })
        .catch((err) => {
          console.log(err.response.data);
          const error = Array.isArray(err.response.data.error)
            ? err.response.data.error[0] : err.response.data.error;
          this.$store.commit('setError', error);
        })
        .finally(() => {
          this.$store.commit('stopLoading');
        });
    },
    addProduct() {
      this.resetError();
      this.$store.dispatch('addProduct', this.inputProduct)
        .then(() => {
          // hide modal
          this.$bvModal.hide('modal-2');
          // show success alert
          this.$store.commit('showAlert', {
            successMessage: 'New Product Successfully Registered',
            interval: 2000,
          });
          this.$store.dispatch('fetchListOfProducts');
        })
        .catch((err) => {
          console.log(err.response);
          const error = Array.isArray(err.response.data.error)
            ? err.response.data.error[0] : err.response.data.error;
          this.$store.commit('setError', error);
        })
        .finally(() => {
          this.$store.commit('stopLoading');
        });
    },
    clickDeleteProduct(id) {
      this.$bvModal.msgBoxConfirm('Are you sure?')
        .then((value) => {
          if (value) {
            this.$store.dispatch('deleteProduct', id)
              .then(() => {
                // show success alert
                this.$store.commit('showAlert', {
                  successMessage: 'Successfully Deleted',
                  interval: 2000,
                });
                this.$store.dispatch('fetchListOfProducts');
              })
              .catch((err) => {
                console.log(err.response);
              })
              .finally(() => {
                store.commit('stopLoading');
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editProduct(id) {
      this.resetError();
      const payload = this.inputProduct;
      payload.id = id;
      this.$store.dispatch('editProduct', payload)
        .then((response) => {
          console.log(response);
          // hide modal
          this.$bvModal.hide(this.editModal.id);
          // show success alert
          this.$store.commit('showAlert', {
            successMessage: 'Product Successfully Edited',
            interval: 2000,
          });
          this.$store.dispatch('fetchListOfProducts');
        })
        .catch((err) => {
          console.log(err.response);
          const error = Array.isArray(err.response.data.error)
            ? err.response.data.error[0] : err.response.data.error;
          this.$store.commit('setError', error);
        })
        .finally(() => {
          this.$store.commit('stopLoading');
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    if (localStorage.token) {
      store.commit('setLoading');
      userAPI.get(`/findUser/${localStorage.person_id}`)
        .then((response) => {
          if (response.data.user_role === 'master' || response.data.user_role === 'admin') {
            next();
          } else {
            next('/');
          }
        })
        .catch((err) => {
          next('/');
          console.log(err.response);
        })
        .finally(() => {
          store.commit('stopLoading');
        });
    } else {
      next('/');
    }
  },
  created() {
    this.$store.dispatch('fetchListOfAdmins');
  },
};
</script>

<style scoped>
.form-register{
  width: 400px !important;
}
.flex{
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

table img {
  width: 200px;
}

.card-info {
  margin-top: -20px;
  font-size: 30px
}
</style>
