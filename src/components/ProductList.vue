<template>
<div>
<delete-modal :id="selectedId" @closeModal="closeModal"
@fetchProduct="getProduct" v-if="showModal"/>
<div class="card shadow">
  <div class="card-header py-3">
    <p class="text-primary m-0 font-weight-bold">Product Info</p>
  </div>
  <div class="card-body">
    <div class="row">
      <div class="col-md-6 text-nowrap">
        <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"></div><input
          type="search" class="form-control form-control-sm" aria-controls="dataTable"
          placeholder="Search" />
      </div>
    </div>
    <div class="table-responsive table mt-2" id="dataTable" role="grid"
      aria-describedby="dataTable_info">
      <table class="table dataTable my-0" id="dataTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image URL</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="item in products" :key="item.id">
          <tr>
            <td>{{item.name}}</td>
            <td><a :href="item.image_url">Image Link</a></td>
            <td>{{item.price}}</td>
            <td>{{item.stock}}</td>
            <td class="d-flex d-lg-flex flex-row justify-content-around align-items-lg-center">
              <router-link :to="{ name:'Edit', params: { item: item } }">
                <i class="far fa-edit"></i> Edit</router-link>
                <span>|</span>
                <a href="#" @click="openModalDelete(item.id)">
                <i class="far fa-trash-alt"></i> Delete
                </a>
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="row">
    </div>
  </div>
</div>
</div>
</template>

<script>
import DeleteModal from '@/components/DeleteModal.vue';

export default {
  name: 'ProductList',
  components: {
    DeleteModal,
  },
  data() {
    return {
      selectedId: {
        type: Number,
      },
      showModal: false,
    };
  },
  methods: {
    getProduct() {
      this.$store.dispatch('fetchProduct')
        .then((result) => {
          this.$store.commit('SET_PRODUCTS', result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openModalDelete(id) {
      this.selectedId = +id;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
