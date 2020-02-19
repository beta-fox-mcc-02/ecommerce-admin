<template>
  <div>
    <h1 class="text-center mb-5">Home</h1>
    <div class="mb-3 d-flex">
      <div>
        <b-button v-b-modal.modal-1>Add New Product</b-button>

        <b-modal id="modal-1" ref="modal-1-ref" title="Create New Product">
          <CreateProduct @closeModal="closeModal" />
          <template v-slot:modal-footer>
            <div class="w-100 h-auto"></div>
          </template>
        </b-modal>
      </div>
      <b-nav-form class="ml-auto" @submit.prevent="searchByName">
        <b-form-input
          size="sm"
          class="mr-sm-2"
          placeholder="Search product name"
          v-model="searchInput"
        ></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
    </div>
    <TableProduct />
  </div>
</template>

<script>
import TableProduct from './components/TableProduct';
import CreateProduct from './components/CreateProduct';

export default {
  name: 'Home',
  data() {
    return {
      searchInput: ''
    };
  },
  components: {
    TableProduct,
    CreateProduct
  },
  methods: {
    searchByName() {
      this.searchInput = '';
    },
    closeModal() {
      this.$refs['modal-1-ref'].hide();
    }
  }

}
</script>

<style>
</style>
