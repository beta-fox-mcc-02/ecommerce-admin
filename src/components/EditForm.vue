<template>
<div class="product-form">
<div class="card shadow">
  <div class="card-header py-3">
    <p class="text-primary m-0 font-weight-bold">Edit Product</p>
  </div>
  <div class="card-body">
    <form @submit.prevent="editProduct">
      <div class="row">
          <div class="col-6">
          <!--  -->
          <div class="form-row">
            <div class="col-2">
            </div>
            <div class="col-8">
                <label><strong>Change Image</strong></label>
              <img src="https://images-na.ssl-images-amazon.com/images/I/71WNWRLJCsL._AC_SL1500_.jpg"
              alt="" class="img-thumbnail img-fluid mw-100 rounded h-10">
              <input type="file" id="file" ref="file" @change="uploadToImgur()"
                class="form-control-file" accept="image/*" />
            </div>
            <div class="col-2">
            </div>
          </div>
          <!--  -->
          </div>
          <div class="col-6">
        <div class="form-group"><label for="address"><strong>Name</strong></label><input type="text"
            class="form-control" name="name" v-model="name" /></div>
        <div class="form-group">
          <div class="form-row">
          </div>
          <div class="col">
            <div class="form-group"><label for="city"><strong>Price</strong><br /></label><input
                type="number" min="0" step="any" class="form-control" name="price"
                v-model="price" /></div>
          </div>
          <div class="col">
            <div class="form-group"><label for="stock"><strong>Stock</strong></label><input
                type="number" min="0" step="any" class="form-control" name="stock"
                v-model="stock" /></div>
          </div>
        </div>
        <div class="form-group"><button class="btn btn-primary" type="submit">Edit</button>
        </div>
          </div>
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
      price: 0,
      stock: 0,
      image_url: '',
    };
  },
  props: ['oldname', 'oldimage', 'oldprice', 'oldstock'],
  methods: {
    editProduct() {
      const payload = {
        id: this.$route.params.id,
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url,
      };
      this.$store.dispatch('editProduct', payload)
        .then((result) => {
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err.response);
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
