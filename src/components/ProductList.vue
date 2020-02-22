<template>
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
            <td class="d-flex d-lg-flex flex-row justify-content-around align-items-lg-center"><a
                href="#">Edit</a><span>|</span><a href="#">Delete</a></td>
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
      <div class="col-md-6 align-self-center">
        <p id="dataTable_info" class="dataTables_info" role="status" aria-live="polite">Showing 1 to
          10 of 27</p>
      </div>
      <div class="col-md-6">
        <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
          <ul class="pagination">
            <li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous"><span
                  aria-hidden="true">«</span></a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span
                  aria-hidden="true">»</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: {
        type: Array,
      },
    };
  },
  methods: {
    getProduct() {
      this.$store.dispatch('fetchProduct')
        .then((result) => {
          this.products = result.data;
          console.log(this.products, 'Dari getProduct then di ProductList.vue');
        })
        .catch((err) => {
          console.log(err);
          console.log(localStorage.getItem('access_token'), 'Dari error get product di component ProductList.vue');
        });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
