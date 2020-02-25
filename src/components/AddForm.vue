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
      <div class="form-group"><label><strong>Add Image</strong></label>
      <input type="file" id="file" ref="file" @change="uploadToImgur()"
          class="form-control-file" accept="image/*" /></div>
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
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0,
      file: '',
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
          console.log(result);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    uploadToImgur() {
      // eslint-disable-next-line prefer-const
      let data = new FormData();
      data.append('name', 'my-file');
      data.append('file', this.file);
      console.log(data);

      axios({
        method: 'POST',
        url: 'https://api.imgur.com/3/upload',
        data,
        datatype: 'json',
        headers: {
          // eslint-disable-next-line no-useless-concat
          Authorization: 'Client-ID' + '4e45322b5570946',
        },
      })
        .then((response) => {
          this.image_url = response.data.link;
          console.log(response.data);
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
