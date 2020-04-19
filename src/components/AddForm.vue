<template>
<div class="product-form">
<div class="card shadow">
  <div class="card-header py-3">
    <p class="text-primary m-0 font-weight-bold">Add Product</p>
  </div>
  <div class="card-body">
    <form @submit.prevent="addProduct">
      <div class="form-group"><label for="address"><strong>Name</strong></label><input type="text"
          class="form-control" name="name" v-model="name" /></div>
      <div class="form-group"><label for="image_url"><strong>Image URL</strong></label>
      <input type="text" class="form-control" name="image_url" v-model="image_url" /></div>
      <div class="form-row">
        <div class="col">
          <div class="form-group"><label for="city"><strong>Price</strong><br /></label><input
        type="number" min="0" step="any" class="form-control" name="price" v-model="price" /></div>
        </div>
        <div class="col">
          <div class="form-group"><label for="stock"><strong>Stock</strong></label><input
        type="number" min="0" step="any" class="form-control" name="stock" v-model="stock" /></div>
        </div>
      </div>
      <div class="form-group"><button class="btn btn-primary btn-sm" type="submit">Add</button>
      </div>
    </form>
  </div>
</div>
</div>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0,
    };
  },
  methods: {
    addProduct() {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
      };
      this.$store.dispatch('addProduct', payload)
        .then((result) => {
          this.$store.commit('SET_MESSAGE', result.data);
        })
        .catch((err) => {
          this.$store.commit('SET_ERRORS', err.response);
        });
    },
  },
};
</script>

<style scoped>
.product-form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  min-width: 80% !important;
}
</style>
